import { RESULTS_SECTION } from "@/constants";

export default function Results() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-black text-center mb-4">
          {RESULTS_SECTION.title}
        </h2>
        <div className="text-2xl font-extrabold text-center text-[#a6231c] uppercase mb-12 tracking-wider">
          {RESULTS_SECTION.subtitle.split("\n").map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
          {RESULTS_SECTION.stats.map((stat, index) => (
            <div
              key={index}
              className="border-4 border-black rounded-sm bg-[#fef2e8] px-8 py-8 flex flex-col justify-center h-full text-left"
            >
              <div className="text-4xl font-extrabold text-[#a6231c] mb-2">
                {stat.value}
              </div>
              <p className="text-black text-xl leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="h-6" />
    </section>
  );
}
