const lines = [['Everything', 'Your', 'Pets', 'Love']];
const delays = ['delay-200', 'delay-300', 'delay-400', 'delay-500', 'delay-600'];

export default function HeroTitle({ tablet = false }: { tablet?: boolean }) {
  let wordIndex = 0;
  return <h1 className={`relative z-20 text-center font-serif-display font-normal tracking-tight text-[#1a3d1a] ${tablet ? 'text-6xl leading-[0.95]' : 'text-[clamp(40px,6vw,90px)] leading-[0.95]'}`}>
    {lines.map((line, i) => <span className="block overflow-hidden" key={i}>{line.map((word) => { const delay = delays[wordIndex++]; return <span key={word} className={`animate-word-pop ${delay} mr-[.18em] inline-block last:mr-0`}>{word}</span>; })}</span>)}
  </h1>;
}