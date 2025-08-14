import { QUALITY_FIRST } from '@/constants';

export default function QualityFirst() {
  return (
    <section className="py-16 px-4 border-b-4 pb-30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4">
          {QUALITY_FIRST.title}
        </h2>
        <p className="text-xl text-gray-600 text-align-center">
          {QUALITY_FIRST.description}
        </p>
      </div>
    </section>
  );
}
