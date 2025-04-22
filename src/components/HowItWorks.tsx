
import { Clock, Book, Check } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: Clock,
      title: "Book a Call",
      description: "A no-pressure consultation to understand your needs"
    },
    {
      icon: Book,
      title: "Review Your Options",
      description: "A custom plan based on your life and goals"
    },
    {
      icon: Check,
      title: "Get Protected",
      description: "And stay confidently organized for whatever comes next"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-[#E8F1FF] rounded-full flex items-center justify-center mx-auto mb-6">
                <step.icon className="w-8 h-8 text-[#004AAD]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-[#E8F1FF] transform -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
