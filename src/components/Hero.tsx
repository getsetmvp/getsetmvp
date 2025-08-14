import { HERO_SECTION } from '@/constants';

export default function Hero() {
  return (
    <section className="py-16 px-4 min-h-[500px] flex items-center border-4 border-black" style={{ backgroundColor: '#ffdc58' }}>
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white border-4 border-black p-6 mb-8 inline-block transform -rotate-2">
          <h1 className="text-4xl md:text-6xl font-bold text-black">
            {HERO_SECTION.title}
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-black mb-8 font-semibold max-w-3xl mx-auto">
          {HERO_SECTION.subtitle}
        </p>
        
        <button className="bg-white text-black px-8 py-4 rounded-md font-semibold text-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150 cursor-pointer">
          {HERO_SECTION.ctaButton}
        </button>
      </div>
    </section>
  );
}
