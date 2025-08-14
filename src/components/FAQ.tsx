"use client";

import { FAQ_ITEMS } from '@/constants';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-16 px-4 bg-[#fef2e8] border-t-4 border-b-4 border-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {FAQ_ITEMS.map((faq, index) => (
            <div key={index} className="border-2 border-black rounded-md overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <button 
                className={`w-full text-left p-4 flex justify-between items-center bg-[#ffdc58] font-semibold text-black hover:bg-[#f8d43a] transition-colors duration-150 cursor-pointer`}
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <svg 
                  className={`w-5 h-5 transition-transform duration-200 ease-out ${openIndex === index ? 'rotate-180' : ''}`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-250 ease-in-out bg-white`}
                style={{ 
                  maxHeight: openIndex === index ? '500px' : '0',
                  paddingTop: openIndex === index ? '16px' : '0',
                  paddingBottom: openIndex === index ? '16px' : '0'
                }}
              >
                <div className="px-4 transition-opacity duration-200" style={{ opacity: openIndex === index ? 1 : 0.8 }}>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
