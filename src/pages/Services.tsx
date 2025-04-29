
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Shield, Heart, FileText, Briefcase, Hospital, Book } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen font-[Inter]">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 bg-gradient-to-br from-white via-gray-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Insurance That Works When You Need It Most
              </h1>
              <p className="text-xl text-gray-600">
                Tailored insurance solutions for professionals, business owners, and families.
              </p>
            </div>
            <div className="mt-8 md:mt-0">
              <Shield className="w-24 h-24 text-[#003880]" />
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Disability Insurance */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <Briefcase className="w-12 h-12 text-[#003880] mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Protect Your Income</h3>
              <p className="text-gray-600 mb-6">
                Your ability to earn an income is your greatest asset. If you're self-employed or incorporated, you likely don't have benefits in place to protect it.
                We design disability insurance plans that ensure your income continues — even if your ability to work doesn't.
              </p>
            </div>

            {/* Critical Illness Insurance */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <Hospital className="w-12 h-12 text-[#003880] mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Support When Life Takes an Unexpected Turn</h3>
              <p className="text-gray-600 mb-6">
                A major health event can turn life upside down. Critical Illness coverage pays out a lump sum tax-free if you're diagnosed with a covered condition, giving you the flexibility to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Take time off work</li>
                <li>Seek private medical care</li>
                <li>Keep your household running during recovery</li>
              </ul>
            </div>

            {/* Life Insurance & Estate Planning */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <Book className="w-12 h-12 text-[#003880] mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Plan Today to Protect Tomorrow</h3>
              <p className="text-gray-600 mb-6">
                Life insurance can do far more than cover final expenses. We build both term and permanent insurance strategies (Whole Life & Universal Life) to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Protect your family</li>
                <li>Secure business succession</li>
                <li>Support tax-efficient wealth transfer</li>
                <li>Fund trusts or legacy gifts</li>
              </ul>
              <p className="text-gray-600 mb-6">
                We also work on intergenerational wealth transfer strategies — helping families transition wealth in a way that honors their goals and supports the structures developed by their accountants and legal advisors.
              </p>
            </div>
          </div>
          
          {/* Insurance Types Timeline */}
          <div className="mt-16 bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-8 text-center">Our Insurance Solutions</h3>
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md flex-1 text-center">
                <h4 className="font-semibold text-xl mb-2">Term Life</h4>
                <p className="text-gray-600">Affordable coverage for specific time periods</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md flex-1 text-center">
                <h4 className="font-semibold text-xl mb-2">Whole Life</h4>
                <p className="text-gray-600">Lifetime coverage with cash value growth</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md flex-1 text-center">
                <h4 className="font-semibold text-xl mb-2">Universal Life</h4>
                <p className="text-gray-600">Flexible premium and investment options</p>
              </div>
            </div>
          </div>

          {/* Collaboration Promise */}
          <div className="mt-16 max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-6">Our Collaboration Promise</h3>
            <p className="text-gray-600 mb-8">
              We value our professional partners and strive to ensure all planning is coordinated and cohesive. You won't need to double-check or correct our work — we welcome collaboration and respect your recommendations.
            </p>
            <Button className="bg-[#003880] hover:bg-[#002d66] text-white text-lg px-8 py-6 h-auto rounded-full transition-all hover:scale-105">
              Book a 30-Minute Consultation
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
