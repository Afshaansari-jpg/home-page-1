
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="font-semibold text-xl text-[#0047CC]">Walker Insurance</div>
        <div className="space-x-6">
          <a href="#what-we-do" className="text-gray-600 hover:text-[#0047CC] transition-colors">What We Do</a>
          <a href="#why-us" className="text-gray-600 hover:text-[#0047CC] transition-colors">Why Us</a>
          <a href="#how-it-works" className="text-gray-600 hover:text-[#0047CC] transition-colors">How It Works</a>
          <Button variant="default" className="bg-[#0047CC] hover:bg-[#003399]">
            Book Consultation
          </Button>
        </div>
      </div>
    </nav>
  );
};
