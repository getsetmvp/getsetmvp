import { PRICING } from '@/constants';

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 px-4 bg-[#ffdc58] border-t-4 border-b-4 border-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12">
          {PRICING.title}
        </h2>
        
        <div className="bg-[#d1f8e9] border-2 border-black p-4 rounded-md text-center mb-6 max-w-2xl mx-auto">
          <p className="text-lg">
            🎉 Special Launch Offer: 3 Spots Only!
          </p>
          <p>
            {PRICING.note}
          </p>
        </div>

        <div className="bg-white border-2 border-black rounded-md p-8 max-w-2xl mx-auto">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold">{PRICING.price}</h3>
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">{PRICING.spotCount}</span>
          </div>
          
          <p className="mb-6">
            The essentials to test your core idea quickly. Price will increase after first 3 clients.
          </p>
          
          <ul className="space-y-3 mb-8">
            {PRICING.features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                {feature}
              </li>
            ))}
          </ul>
          
          <p className="mb-8">
            Start small, think big! Test your core idea quickly and affordably with a full MVP.
          </p>
          
          <button className="w-full bg-[#ffdc58] text-black px-8 py-4 rounded-md font-semibold text-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150 cursor-pointer">
            {PRICING.cta}
          </button>
        </div>
      </div>
    </section>
  );
}
