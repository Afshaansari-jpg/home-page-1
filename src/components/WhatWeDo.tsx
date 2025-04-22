
import { Shield, Heart, Cloud } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const WhatWeDo = () => {
  const services = [
    {
      icon: Shield,
      title: "Disability Insurance",
      description: "Protect your most valuable asset - your ability to earn an income."
    },
    {
      icon: Heart,
      title: "Critical Illness Insurance",
      description: "Financial security when facing serious health challenges."
    },
    {
      icon: Cloud,
      title: "Digital Estate Planning",
      description: "Secure digital storage and organization of your important documents."
    }
  ];

  return (
    <section id="what-we-do" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">What We Do</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          We specialize in Disability, Critical Illness, and Life Insurance — and we go a step further by helping clients organize and store their insurance and estate documents digitally, so their affairs are always in order and accessible.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-2 hover:border-[#004AAD] transition-colors">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <service.icon className="w-12 h-12 text-[#004AAD]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
