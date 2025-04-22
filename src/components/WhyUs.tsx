
import { Check } from "lucide-react";

export const WhyUs = () => {
  const benefits = [
    "Over 12 years of experience in insurance and wealth protection",
    "Licensed with Canada's top insurance providers",
    "Fully digital, secure, and built around your schedule",
    "We collaborate with your accountant and lawyer to ensure all parts of your plan are aligned",
    "No pushy sales — just clarity, structure, and long-term value"
  ];

  return (
    <section id="why-us" className="py-20 bg-[#E8F1FF]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Why Work With Us</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start bg-white rounded-lg p-6 shadow-sm">
              <Check className="w-6 h-6 text-[#004AAD] flex-shrink-0 mt-1" />
              <p className="ml-4 text-lg text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
