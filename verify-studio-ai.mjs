// verify-studio-ai.mjs — THROWAWAY pre-merge check (do NOT commit; rm after).
//
// Mirrors the parseChat() approach from the PR #45 openai fix
// (chat.completions.CREATE + JSON.parse, NOT .parse()) and runs it against the
// live OpenAI API with the real Studio schemas (post-design + carousel).
// If both print ✅ with valid JSON, the structured-outputs fix works.
//
// Run from the repo root (node_modules must resolve openai + zod):
//   OPENAI_API_KEY=$(aws ssm get-parameter --name /postra/dev/OPENAI_API_KEY \
//     --with-decryption --region eu-west-2 --query Parameter.Value --output text) \
//     node verify-studio-ai.mjs
//
// Does NOT test: DALL-E image gen, storage upload, credits, Whisper/Pixabay,
// or the frontend — those need the deployed app. This isolates the AI call that
// was 500-ing ("Unknown parameter: response_format").

import OpenAI from 'openai';
import { zodResponseFormat } from 'openai/helpers/zod';
import { z } from 'zod';

const key = process.env.OPENAI_API_KEY;
if (!key) {
  console.error('❌ Set OPENAI_API_KEY (see header for the SSM one-liner).');
  process.exit(1);
}
const openai = new OpenAI({ apiKey: key });

// --- mirror of the fix (openai.service.ts parseChat) ---
async function parseChat(body) {
  const completion = await openai.chat.completions.create(body);
  const content = completion.choices?.[0]?.message?.content ?? null;
  return content ? JSON.parse(content) : null;
}

const PostDesignSchema = z.object({
  headline: z.string(),
  subtext: z.string(),
  cta: z.string(),
  imagePrompt: z.string(),
  colors: z.object({ background: z.string(), accent: z.string(), text: z.string() }),
  layout: z.enum(['centered-stack', 'left-aligned', 'bottom-stack', 'top-banner']),
});

const SlideSchema = z.object({
  headline: z.string(),
  subtext: z.string(),
  cta: z.string(),
  layout: z.enum(['centered-stack', 'left-aligned', 'bottom-stack', 'top-banner']),
});
const CarouselSchema = z.object({
  imagePrompt: z.string(),
  colors: z.object({ background: z.string(), accent: z.string(), text: z.string() }),
  slides: z.array(SlideSchema).min(4).max(4),
});

async function run(name, schema, system, user) {
  try {
    const raw = await parseChat({
      model: 'gpt-4.1',
      messages: [
        { role: 'system', content: system },
        { role: 'user', content: user },
      ],
      response_format: zodResponseFormat(schema, name),
    });
    const parsed = schema.parse(raw); // zod validation, like the service does
    console.log(`\n✅ ${name}: OK (valid structured output, Polish prompt)`);
    console.log(JSON.stringify(parsed, null, 2).slice(0, 700));
    return true;
  } catch (e) {
    console.log(`\n❌ ${name}: FAIL — ${e?.status ?? ''} ${e?.message ?? e}`);
    return false;
  }
}

const ok1 = await run(
  'postDesign',
  PostDesignSchema,
  'You are a social media graphic designer. Reply with all text fields in the language of the user prompt.',
  'letnia wyprzedaż -50% na buty sportowe'
);
const ok2 = await run(
  'carousel',
  CarouselSchema,
  'You design a 4-slide social carousel. All text in the prompt language. Exactly 4 slides: hook, two body points, CTA.',
  '5 powodów, żeby zacząć biegać rano'
);

console.log(`\n=== ${ok1 && ok2 ? '🟢 PASS — fix dziala' : '🔴 FAIL'} ===`);
process.exit(ok1 && ok2 ? 0 : 1);
