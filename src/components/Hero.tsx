
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="min-h-screen flex items-center py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
              Protect Your Income.
              <br />
              Preserve Your Legacy.
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              At Walker Insurance & Estate Planning Ltd., we help professionals, business owners, and families navigate the unexpected. Through personalized insurance strategies and modern digital planning tools, we make sure you and your loved ones are protected — today and into the future.
            </p>
            <Button className="bg-[#0047CC] hover:bg-[#003399] text-white text-lg px-8 py-6 h-auto">
              Book a 30-Minute Consultation
            </Button>
          </div>
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl hidden lg:block">
            <img 
              src="public/lovable-uploads/7d5e606c-4880-4578-8fa7-6ddc91c3bdf3.png"
              alt="Walker Insurance Hero"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
