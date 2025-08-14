import { TWO_WEEKS_SECTION } from '@/constants';
import Image from 'next/image';
import lightningIcon from '../../public/icons/lightning.svg';
import pigIcon from '../../public/icons/pig.svg';
import targetIcon from '../../public/icons/target.svg';
import computeIcon from '../../public/icons/compute.svg';

const tilts = [
  'rotate-[-2.5deg]',
  'rotate-[1.5deg]',
  'rotate-[1.5deg]',
  'rotate-[-2deg]'
];

export default function TwoWeeksSection() {
  const icons = [lightningIcon, pigIcon, targetIcon, computeIcon];
  return (
    <section id="approach" className="py-16 px-0 bg-[#fef2e8] border-t-4 border-b-4 border-black w-full relative overflow-x-hidden">
      {/* Tilted yellow title bar */}
      <div className="mx-auto mb-16 w-full flex justify-center -rotate-2">
        <div className="bg-[#ffe066] border-2 border-black w-[90%] md:w-[80%] px-4 py-6 text-3xl md:text-4xl font-extrabold text-black text-center shadow-md" style={{minWidth: 350}}>
          {TWO_WEEKS_SECTION.title}
        </div>
      </div>
      {/* Tilted cards grid */}
      <div className="w-[90%] md:w-[80%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {TWO_WEEKS_SECTION.points.map((point, index) => (
            <div
              key={index}
              className={`bg-white border-2 border-black px-8 py-7 flex items-start gap-4 shadow-md ${tilts[index]} skew-x-[-1deg]`}
              style={{minHeight: 150}}
            >
              <div className="w-12 h-12 flex-shrink-0 mt-1">
                <Image src={icons[index]} alt={point.title + ' icon'} width={48} height={48} />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-black mb-2">{point.title}</h3>
                <p className="text-black text-base leading-relaxed">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Tilted CTA card */}
        <div className="flex justify-center">
          <div className="bg-white border-2 border-black px-10 py-7 -rotate-2 shadow-lg flex flex-col items-center" style={{minWidth: 220}}>
            <h3 className="text-2xl font-extrabold text-black mb-4">
              {TWO_WEEKS_SECTION.cta}
            </h3>
            <button className="bg-white text-black px-8 py-4 rounded-md font-semibold text-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150 cursor-pointer">
              {TWO_WEEKS_SECTION.ctaButton}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
