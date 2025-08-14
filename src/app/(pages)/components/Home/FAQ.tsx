"use client";

import { useState } from "react";
import faq from "../../../../assets/FAQs.svg";
import Image from "next/image";

const faqData = [
  {
    question: "How do I create a SnapMind account?",
    answer:
      "Click the 'Get Started Free' button at the top right and complete the quick registration form. You can start learning instantly after signing up.",
  },
  {
    question: "Do I need to pay to use SnapMind?",
    answer:
      "SnapMind offers a free plan with a 3-course limit. You can upgrade to unlock unlimited courses, advanced AI features, and premium learning resources.",
  },
  {
    question: "How does SnapMind generate courses?",
    answer:
      "Our AI instantly creates a personalized course outline based on your selected topic and pulls up-to-date resources from trusted sources across the internet.",
  },
  {
    question: "Will my progress be saved?",
    answer:
      "Absolutely. SnapMind tracks your completed topics, quiz scores, and points in real time so you can pick up right where you left off.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center ">
        <div>
          <h2 className="text-3xl font-semibold mb-4 w-fit">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                onClick={() => toggle(index)}
                className="cursor-pointer p-4 shadow-sm transition hover:shadow-md bg-gray-50/5"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{item.question}</h3>
                  <span className="text-xl">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </div>
                {openIndex === index && (
                  <p className="mt-2 pt-2 text-sm border-t border-gray-300">
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:flex justify-center">
          <Image src={faq} alt="FAQ" className="w-96" />
        </div>
      </div>
    </section>
  );
}
