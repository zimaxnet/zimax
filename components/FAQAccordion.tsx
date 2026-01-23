'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border border-gray-200 rounded-lg">
          <button
            type="button"
            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            onClick={() => toggle(index)}
            aria-expanded={openIndex === index}
          >
            <span className="font-medium text-gray-900">{item.question}</span>
            <svg
              className={`w-5 h-5 text-gray-500 transition-transform ${
                openIndex === index ? 'transform rotate-180' : ''
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === index && (
            <div className="px-6 pb-4 text-gray-600">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
