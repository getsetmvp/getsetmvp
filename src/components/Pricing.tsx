import { PRICING } from '@/constants';

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 px-4 bg-[#ffdc58] border-t-4 border-b-4 border-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            {PRICING.title}
          </h2>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto">
            {PRICING.subtitle}
          </p>
        </div>
        
        <div className="bg-[#d1f8e9] border-2 border-black p-4 rounded-md text-center mb-8 max-w-3xl mx-auto">
          <p className="text-lg font-semibold">
            � {PRICING.note}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {PRICING.plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white border-2 border-black rounded-md p-8 ${
                plan.highlight 
                  ? 'shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform scale-105' 
                  : 'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className="inline-block bg-[#ffdc58] text-black px-3 py-1 rounded-full text-sm font-semibold mb-2">
                  {plan.tag}
                </div>
                <h3 className="text-2xl font-bold text-black mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center mb-3">
                  <span className="text-4xl font-bold text-black">{plan.price}</span>
                  {plan.period && <span className="text-gray-600 ml-1">/{plan.period}</span>}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <span className="text-green-500 mr-3 mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-gray-800">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="text-sm text-gray-600 mb-2">
                  <strong>Ownership:</strong> {plan.ownership}
                </div>
                <div className="text-sm text-gray-600">
                  <strong>Note:</strong> {plan.additionalInfo}
                </div>
              </div>
              
              <a 
                href="https://calendly.com/getsetmvp/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`block w-full text-center px-8 py-4 rounded-md font-semibold text-lg border-2 border-black transition-all duration-150 cursor-pointer ${
                  plan.highlight
                    ? 'bg-black text-white shadow-[4px_4px_0px_0px_rgba(255,220,88,1)] hover:shadow-[2px_2px_0px_0px_rgba(255,220,88,1)]'
                    : 'bg-[#ffdc58] text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                } hover:translate-x-[2px] hover:translate-y-[2px]`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-800 mb-6">
            Not sure which plan fits your startup? Let's discuss your specific needs.
          </p>
          <a 
            href="https://calendly.com/getsetmvp/30min" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-8 py-4 rounded-md font-semibold text-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,220,88,1)] hover:shadow-[2px_2px_0px_0px_rgba(255,220,88,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150"
          >
            {PRICING.bottomCta} →
          </a>
        </div>
      </div>
    </section>
  );
}
