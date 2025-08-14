import Image from 'next/image';
import { PROCESS_STEPS } from '@/constants';

export default function ProcessSteps() {
  return (
    <section id="process" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12">
          {PROCESS_STEPS.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROCESS_STEPS.steps.map((step, index) => (
            <div
              key={index}
              className="bg-[#ffdc58] p-6 rounded-lg text-center border-4 border-black transform transition-transform hover:scale-105"
            >
              <div className="mb-3">
                <Image
                  src={`/icons/${step.icon}`}
                  alt={step.title}
                  width={48}
                  height={48}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-black">
                {step.title}
              </h3>
              <p className="">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
