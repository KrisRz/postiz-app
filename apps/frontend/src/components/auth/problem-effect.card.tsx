import { FC } from 'react';

export const ProblemEffectCard: FC<{
  title: string;
  description: string;
  content: string;
}> = ({ content, description, title }) => {
  return (
    <div className="flex w-full flex-col gap-[16px] rounded-[20px] border border-white/10 bg-[linear-gradient(180deg,rgba(30,41,59,0.52),rgba(15,23,42,0.76))] p-[20px] shadow-[0_20px_40px_rgba(2,6,23,0.18),inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl">
      <div className="flex min-w-0 flex-col gap-[4px]">
        <div className="text-[16px] font-[700] text-white/92">{title}</div>
        <div className="text-[11px] font-[500] uppercase tracking-[0.08em] text-slate-300/64">
          {description}
        </div>
      </div>
      <div className="h-px w-full bg-white/8" />
      <div className="w-full min-w-0 whitespace-pre-line text-[12px] font-[400] leading-[1.65] text-white/82">
        {content}
      </div>
    </div>
  );
};
