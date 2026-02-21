# Branding audit — Postiz → Postra

Audyt wykonany dla Fazy 1. Wszystkie wystąpienia "Postiz" / "postiz" / domen postiz.com w kodzie (bez node_modules, .git, pnpm-lock.yaml).

## ZASADA

- **ZMIENIĆ:** wszystko co widzi użytkownik (UI, tytuły, meta, emaile, linki do naszej aplikacji) → Postra / postra.pl
- **ZACHOWAĆ:** LICENSE, NOTICE, atrybucja upstream (AGPL). W stopce: link "Kod źródłowy" → https://github.com/KrisRz/postiz-app

---

## 1. ZMIENIĆ — Frontend (apps/frontend)

### 1.1 Tytuły stron (metadata)

| Plik | Obecnie | Na |
|------|---------|-----|
| `src/app/(app)/auth/page.tsx` | Postiz / Gitroom Register | Postra Register |
| `src/app/(app)/auth/login/page.tsx` | Postiz / Gitroom Login | Postra Login |
| `src/app/(app)/auth/forgot/page.tsx` | Postiz / Gitroom Forgot Password | Postra Forgot Password |
| `src/app/(app)/auth/forgot/[token]/page.tsx` | jw. | Postra Forgot Password |
| `src/app/(app)/auth/activate/page.tsx` | Postiz / Gitroom | Postra |
| `src/app/(app)/auth/activate/[code]/page.tsx` | jw. | Postra |
| `src/app/(app)/auth/layout.tsx` | Postiz To Grow Their Social Presence | Postra — zarządzaj publikacją. Po polsku. |
| `src/app/(app)/(site)/settings/page.tsx` | Postiz / Gitroom Settings | Postra Settings |
| `src/app/(app)/(site)/plugs/page.tsx` | Postiz / Gitroom Plugs | Postra Plugs |
| `src/app/(app)/(site)/media/page.tsx` | Postiz / Gitroom Media | Postra Media |
| `src/app/(app)/(site)/launches/page.tsx` | Postiz Calendar / Gitroom Launches | Postra Calendar |
| `src/app/(app)/(site)/billing/page.tsx` | Postiz / Gitroom Billing | Postra Billing |
| `src/app/(app)/(site)/billing/lifetime/page.tsx` | Postiz / Gitroom Lifetime deal | Postra Lifetime deal |
| `src/app/(app)/(site)/analytics/page.tsx` | Postiz / Gitroom Analytics | Postra Analytics |
| `src/app/(app)/(site)/agents/page.tsx` | Postiz - Agent | Postra - Agent |
| `src/app/(app)/(site)/agents/layout.tsx` | Postiz - Agent | Postra - Agent |
| `src/app/(app)/(site)/agents/[id]/page.tsx` | Postiz - Agent | Postra - Agent |
| `src/app/(app)/(site)/third-party/page.tsx` | Postiz Integrations / Gitroom Integrations | Postra Integrations |
| `src/app/(app)/(preview)/p/[id]/page.tsx` | Postiz / Gitroom Preview, `/postiz.svg` | Postra Preview, logo Postra |

### 1.2 Layout / domena / analytics

| Plik | Zmiana |
|------|--------|
| `src/app/(app)/layout.tsx` | `data-domain="postiz.com"` → `postra.pl`; `domain` → `postra.pl` (gdy IS_GENERAL) |
| `src/components/auth/register.tsx` | `https://postiz.com/terms` → `https://postra.pl/terms`, `.../privacy` → `.../privacy` |
| `src/components/layout/top.menu.tsx` | `https://affiliate.postiz.com` → usunąć lub `https://postra.pl` (jeśli mamy program) |
| `src/components/layout/logout.component.tsx` | `Postiz` / Gitroom → Postra |
| `src/components/layout/pre-condition.component.tsx` | "another Postiz account" → "another Postra account" |
| `src/components/layout/dubAnalytics.tsx` | `refer: 'postiz.pro'` → `refer: 'postra.pl'` |
| `src/components/layout/chrome.extension.component.tsx` | link do Chrome extension Postiz → link do naszej wersji (albo ukryć do czasu własnego extension) |
| `src/components/public-api/public.component.tsx` | Postiz API, docs.postiz.com → Postra API, docs.postra.pl (lub postra.pl/docs); link do repo → KrisRz/postiz-app |
| `src/components/onboarding/onboarding.modal.tsx` | Learn How to Use Postiz, Postiz Tutorial → Postra |
| `src/components/onboarding/onboarding.tsx` | Welcome to Postiz → Postra |
| `src/components/new-layout/billing.after.tsx` | Join 10,000+ Entrepreneurs Who Use Postiz → Postra (lub PL copy) |
| `src/components/billing/first.billing.component.tsx` | Grow Fast With Postiz, Postiz Tutorial, Postiz To Grow... → Postra |
| `src/components/billing/faq.component.tsx` | Postiz w tekstach FAQ, link do repo → github.com/KrisRz/postiz-app |
| `src/components/launches/add.provider.component.tsx` | Postiz browser extension, chromewebstore Postiz → Postra extension (lub komunikat "extension w przygotowaniu") |
| `src/components/launches/web3/providers/moltbook.provider.tsx` | Postiz social media scheduler, MyPostizAgent → Postra |
| `src/components/agents/agent.chat.tsx` | agent="postiz", Postiz agent → postra / Postra agent |
| `src/components/webhooks/webhooks.tsx` | i18n key + fallback "Postiz" → Postra |

### 1.3 Assety (zamienić pliki)

| Obecny plik (public/) | Działanie |
|------------------------|-----------|
| `favicon.ico`, `favicon.png` | Zastąpić assetami z Postra (coming-soon: favicon.png, logo.png) |
| `postiz.svg`, `postiz-text.svg`, `postiz-fav.png` | Zastąpić logo Postra (logo.svg / logo-text.svg dla Postra) |
| `logo.svg`, `logo-text.svg` | Sprawdzić czy używane jako Postiz — zamienić na Postra |

Kopiować z `Postra/coming-soon/`: logo.png, postrapl.png, favicon.png. Wygenerować favicon-16, favicon-32, apple-touch-icon jeśli potrzeba.

### 1.4 Package name (opcjonalnie)

| Plik | Uwaga |
|------|--------|
| `apps/frontend/package.json` | `"name": "postiz-frontend"` — można zostawić lub zmienić na postra-frontend (nie krytyczne) |

---

## 2. ZMIENIĆ — Backend (apps/backend)

| Plik | Zmiana |
|------|--------|
| `package.json` | `"name": "postiz-backend"` — opcjonalnie postra-backend |
| `src/api/routes/copilot.controller.ts` | `getAgent('postiz')` — nazwa agenta wewnętrzna, można zostawić lub zmienić na 'postra' |

---

## 3. ZMIENIĆ — Libraries (nestjs, shared)

### 3.1 nestjs-libraries

| Plik | Zmiana |
|------|--------|
| `src/sentry/initialize.sentry.ts` | `Postiz ${capitalize(appName)}` → Postra |
| `src/newsletter/providers/listmonk.provider.ts` | Welcome to Postiz → Welcome to Postra |
| `src/database/prisma/organizations/organization.repository.ts` | `@postiz.com` (email placeholder) → `@postra.pl` |
| `src/database/prisma/agencies/agencies.service.ts` | Treści emaili: Postiz, postiz.com/agencies, nevo@postiz.com → Postra, postra.pl, np. hello@postra.pl |
| `src/integrations/social/mastodon.custom.provider.ts` | client_name: 'Postiz' → 'Postra' |
| `src/crypto/nowpayments.ts` | 'Lifetime deal account for Postiz' → Postra |
| `src/chat/start.mcp.ts` | name: 'Postiz MCP' → 'Postra MCP', agent 'postiz' → 'postra' |
| `src/chat/mastra.service.ts` | agent 'postiz' → 'postra' |
| `src/chat/load.tools.service.ts` | name: 'postiz' → 'postra' |

### 3.2 Tłumaczenia (i18n)

Wszystkie pliki w `libraries/react-shared-libraries/src/translation/locales/*/translation.json` zawierają klucze z "Postiz" w wartości. Dla **języka polskiego (pl)** — nowy plik w Fazie 2, wszystkie stringi "Postra". Dla **pozostałych języków** na rebrand: zamienić w wartościach "Postiz" → "Postra" oraz linki postiz.com → postra.pl, docs.postiz.com → postra.pl/docs (lub odpowiednik). Link do open-source: https://github.com/KrisRz/postiz-app.

Lista plików translation: `en`, `zh`, `vi`, `tr`, `ru`, `pt`, `ko`, `ka_ge`, `ja`, `he`, `fr`, `es`, `de`, `ar` (wszystkie w `locales/<code>/translation.json`).

---

## 4. ZMIENIĆ — Konfiguracja / env / CLI / SDK / Docker

| Plik | Zmiana |
|------|--------|
| `.env.example` | Komentarz docs.postiz.com → postra.pl; FRONTEND_URL, MAIN_URL domyślnie https://postra.pl |
| `docker-compose.dev.yaml` | Komentarz docs.postiz.com — opcjonalnie postra |
| `apps/sdk/src/index.ts` | `https://api.postiz.com` → `https://api.postra.pl` (lub env) |
| `apps/sdk/README.md` | Postiz, postiz.com, docs → Postra, postra.pl |
| `apps/cli/src/index.ts` | https://postiz.com → https://postra.pl |
| `apps/cli/src/api.ts` | api.postiz.com → api.postra.pl |
| `apps/cli/package.json` | homepage postiz.com → postra.pl |
| `apps/cli/README.md`, `QUICK_START.md`, `PROJECT_STRUCTURE.md`, `HOW_TO_RUN.md`, `SUPPORTED_FILE_TYPES.md`, `SKILL.md` | postiz.com, api.postiz.com, cdn.postiz.com → postra.pl, api.postra.pl, cdn.postra.pl |
| `apps/extension/manifest.json`, `manifest.dev.json` | `https://*.postiz.com/*` → `https://*.postra.pl/*` |
| `.github/workflows/publish-extension.yml`, `build-extension.yaml` | FRONTEND_URL=platform.postiz.com → postra.pl |
| `.github/copilot-instructions.md` | docs.postiz.com → postra.pl/docs (lub zostawić jako referencja upstream) |
| `.github/ISSUE_TEMPLATE/config.yml`, `01_bug_report.yml` | discord.postiz.com → np. usunąć lub link do Postra community |

---

## 5. ZACHOWAĆ (AGPL / atrybucja)

| Element | Działanie |
|---------|------------|
| `LICENSE` | Nie zmieniać (AGPL-3.0) |
| `NOTICE` | Nie zmieniać (atrybucja upstream gitroomhq/postiz-app) |
| Komentarze w kodzie z "Postiz" / "Gitroom" w kontekście licencji | Zostawić |
| `package.json` (root) name "gitroom" | Można zostawić (wewnętrzne) |
| `@postiz/wallets` (dependency) | Zostawić (nazwa pakietu upstream) |

---

## 6. README / CONTRIBUTING (repo publiczne)

Dla forku KrisRz/postiz-app (Postra):

| Plik | Propozycja |
|------|------------|
| `README.md` | Nagłówek: "Postra — fork of Postiz. An alternative to Buffer… po polsku." Linki: postra.pl, rejestracja postra.pl, docs postra.pl. Zachować "Based on [Postiz](https://github.com/gitroomhq/postiz-app)". |
| `CONTRIBUTING.md` | Zaktualizować linki do docs/discord na Postra (lub "this fork") gdzie potrzeba; zachować odniesienie do upstream developer guide. |

---

## 7. Podsumowanie

- **ZMIENIĆ:** ~50+ plików (frontend pages, components, layout, backend services, agencies emails, i18n, env, SDK, CLI, extension, workflows, README).
- **Assety:** favicon.ico, favicon.png, postiz.svg, postiz-text.svg, postiz-fav.png, logo.svg, logo-text.svg — zastąpić wersjami Postra.
- **ZACHOWAĆ:** LICENSE, NOTICE, @postiz/wallets; w stopce UI dodać link "Kod źródłowy" → https://github.com/KrisRz/postiz-app.

Kolejność wdrożenia: 1.1 Audyt (gotowe) → 1.2 Wymiana brandingu (najpierw assety i layout/tytuły, potem komponenty, potem backend/emails, na końcu i18n i docs).
