
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Shield, Heart, FileText } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen font-[Inter]">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 bg-gradient-to-br from-white via-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-8">
            Insurance That Works When You Need It Most
          </h1>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Disability Insurance */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <Shield className="w-12 h-12 text-[#0047CC] mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Disability Insurance</h3>
              <p className="text-gray-600 mb-6">
                Your ability to earn an income is your greatest asset. If you're self-employed or incorporated, you likely don't have benefits in place to protect it.
                We design disability insurance plans that ensure your income continues — even if your ability to work doesn't.
              </p>
            </div>

            {/* Critical Illness Insurance */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <Heart className="w-12 h-12 text-[#0047CC] mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Critical Illness Insurance</h3>
              <p className="text-gray-600 mb-6">
                A major health event can turn life upside down. Critical Illness coverage pays out a lump sum tax-free if you're diagnosed with a covered condition, giving you the flexibility to take time off, seek private care, or keep your household running during recovery.
              </p>
            </div>

            {/* Life Insurance & Estate Planning */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <FileText className="w-12 h-12 text-[#0047CC] mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Life Insurance & Estate Planning</h3>
              <p className="text-gray-600 mb-6">
                Life insurance can do far more than cover final expenses. We build both term and permanent insurance strategies (Whole Life & Universal Life) to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Protect your family</li>
                <li>Secure business succession</li>
                <li>Support tax-efficient wealth transfer</li>
                <li>Fund trusts or legacy gifts</li>
              </ul>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-16 max-w-3xl mx-auto text-center">
            <p className="text-gray-600 mb-8">
              We value our professional partners and strive to ensure all planning is coordinated and cohesive. You won't need to double-check or correct our work — we welcome collaboration and respect your recommendations.
            </p>
            <Button className="bg-[#0047CC] hover:bg-[#003399] text-white text-lg px-8 py-6 h-auto">
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
