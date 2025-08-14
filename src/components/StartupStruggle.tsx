import { STARTUP_STRUGGLE } from '@/constants';
import Image from 'next/image';
import walletIcon from '../../public/icons/wallet.svg';
import clockIcon from '../../public/icons/clock.svg';
import targetIcon from '../../public/icons/target.svg';
import computeIcon from '../../public/icons/compute.svg';

export default function StartupStruggle() {
  return (
    <section id="problem" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-4">
            {STARTUP_STRUGGLE.title}
          </h2>
          <p className="text-lg text-gray-700">
            {STARTUP_STRUGGLE.subtitle}
          </p>
        </div>
        <div className="border-2 border-black rounded-lg bg-[#fef2e8] p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {/* First point */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 flex-shrink-0">
                <Image src={walletIcon} alt="Wallet Icon" width={48} height={48} />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-black mb-2">{STARTUP_STRUGGLE.points[0].title}</h3>
                <p className="text-gray-700 text-xl leading-relaxed">{STARTUP_STRUGGLE.points[0].description}</p>
              </div>
            </div>
            {/* Second point */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 flex-shrink-0">
                <Image src={clockIcon} alt="Clock Icon" width={48} height={48} />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-black mb-2">{STARTUP_STRUGGLE.points[1].title}</h3>
                <p className="text-gray-700 text-xl leading-relaxed">{STARTUP_STRUGGLE.points[1].description}</p>
              </div>
            </div>
            {/* Third point */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 flex-shrink-0">
                <Image src={targetIcon} alt="Target Icon" width={48} height={48} />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-black mb-2">{STARTUP_STRUGGLE.points[2].title}</h3>
                <p className="text-gray-700 text-xl leading-relaxed">{STARTUP_STRUGGLE.points[2].description}</p>
              </div>
            </div>
            {/* Fourth point */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 flex-shrink-0">
                <Image src={computeIcon} alt="Chip Icon" width={48} height={48} />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-black mb-2">{STARTUP_STRUGGLE.points[3].title}</h3>
                <p className="text-gray-700 text-xl leading-relaxed">{STARTUP_STRUGGLE.points[3].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
