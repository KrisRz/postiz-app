import { ProblemEffectCard } from '@gitroom/frontend/components/auth/problem-effect.card';

const scenarios1 = [
  {
    title: 'Chaos w publikacji',
    description: 'Planowanie treści',
    content:
      'Posty powstają na ostatnią chwilę, a terminy stale się rozjeżdżają.\n\nPostra porządkuje kalendarz publikacji, dzięki czemu od razu widzisz co, gdzie i kiedy ma się pojawić.',
  },
  {
    title: 'Brak pomysłów',
    description: 'AI do treści',
    content:
      'Zamiast zaczynać każdy post od zera, możesz szybciej ruszyć z gotowym kierunkiem.\n\nPostra pomaga generować tematy, hooki i szkice treści, które potem dopracowujesz pod swój styl.',
  },
  {
    title: 'Kilka kanałów naraz',
    description: 'Jedno miejsce pracy',
    content:
      'Facebook, Instagram, TikTok i LinkedIn często żyją osobno, a publikacja robi się ręczna i niespójna.\n\nPostra zbiera planowanie i publikację w jednym miejscu, więc łatwiej utrzymać porządek między kanałami.',
  },
];

const scenarios2 = [
  {
    title: 'Nieregularna komunikacja',
    description: 'Stały rytm publikacji',
    content:
      'Treści pojawiają się zrywami, a potem zapada cisza.\n\nPostra pomaga budować zapas materiałów i utrzymać regularność bez codziennego gaszenia pożarów.',
  },
  {
    title: 'Praca z klientem lub zespołem',
    description: 'Lepszy workflow',
    content:
      'Akceptacje, poprawki i komentarze są porozrzucane po wiadomościach i dokumentach.\n\nPostra porządkuje proces, żeby szybciej zobaczyć, co jest gotowe, co czeka i co wymaga poprawy.',
  },
  {
    title: 'Nie wiesz, co działa',
    description: 'Lepsze decyzje',
    content:
      'Publikujesz treści, ale trudno ocenić, które formaty i kanały naprawdę dają efekt.\n\nPostra daje analitykę, która pomaga szybciej wyłapać, co warto powtarzać, a co odpuścić.',
  },
];

export const ProblemEffectComponent = () => {
  return (
    <div className="relative mt-[24px] h-[440px] w-full max-w-[900px] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden px-[12px] xl:px-[24px]">
        <div className="pointer-events-none absolute left-0 top-0 z-[100] h-[140px] w-full bg-[linear-gradient(180deg,rgba(10,14,26,0.96),rgba(10,14,26,0))]" />
        <div className="pointer-events-none absolute bottom-0 left-0 z-[100] h-[140px] w-full bg-[linear-gradient(0deg,rgba(10,14,26,0.96),rgba(10,14,26,0))]" />
        <div className="flex justify-center gap-[12px]">
          <div className="flex flex-1 flex-col gap-[12px] animate-marqueeUp">
            {[1, 2].flatMap((p) =>
              scenarios1.map((item) => (
                <div key={p + '_' + item.title} className="flex flex-col gap-[12px]">
                  <ProblemEffectCard {...item} />
                </div>
              ))
            )}
          </div>
          <div className="flex flex-1 flex-col gap-[12px] animate-marqueeDown">
            {[1, 2].flatMap((p) =>
              scenarios2.map((item) => (
                <div key={p + '_' + item.title} className="flex flex-col gap-[12px]">
                  <ProblemEffectCard {...item} />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
