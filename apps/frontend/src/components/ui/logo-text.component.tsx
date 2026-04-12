import React from 'react';
import Image from 'next/image';

export const LogoTextComponent = () => {
  return (
    <div className="flex w-full justify-center">
      <Image
        src="/logon3obackground-clean.webp"
        alt="Postra"
        width={594}
        height={582}
        priority
        className="h-auto w-[92px] sm:w-[104px]"
      />
    </div>
  );
};
