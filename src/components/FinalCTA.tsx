import { FINAL_CTA } from '@/constants';

export default function FinalCTA() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
          {FINAL_CTA.title}
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
          {FINAL_CTA.subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-black px-8 py-3 rounded-md font-semibold text-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150 cursor-pointer">
            {FINAL_CTA.primaryButton}
          </button>
          <button className="bg-[#ffdc58] text-black px-8 py-3 rounded-md font-semibold text-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150 cursor-pointer">
            {FINAL_CTA.secondaryButton}
          </button>
        </div>
      </div>
    </section>
  );
}
