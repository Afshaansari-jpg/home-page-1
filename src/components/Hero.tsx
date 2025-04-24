
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="min-h-screen flex items-center py-20 bg-gradient-to-br from-[#0047CC] via-[#0047CC] to-[#003399]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold text-white leading-tight mb-6">
            Protect Your Income. 
            <br />
            Preserve Your Legacy.
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            At Walker Insurance & Estate Planning Ltd., we help professionals, business owners, and families navigate the unexpected. Through personalized insurance strategies and modern digital planning tools, we make sure you and your loved ones are protected — today and into the future.
          </p>
          <Button className="bg-white text-[#0047CC] hover:bg-gray-100 text-lg px-8 py-6 h-auto">
            Book a 30-Minute Consultation
          </Button>
        </div>
      </div>
    </div>
  );
};
