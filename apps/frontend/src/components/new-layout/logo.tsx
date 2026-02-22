'use client';

export const Logo = () => {
  return (
    <div className="w-[60px] h-[60px] overflow-hidden flex items-center justify-start pl-[2px]">
      <img
        src="/postra-logo.png"
        alt="Postra"
        className="h-[100px] w-auto max-w-none object-cover object-left"
      />
    </div>
  );
};
