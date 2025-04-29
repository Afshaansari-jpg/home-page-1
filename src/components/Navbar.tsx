
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="fixed w-full bg-[#003880] z-50 border-b border-[#00296b]">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="font-semibold text-xl text-[#E6ECF4]">Walker Insurance</Link>
        <div className="space-x-6">
          <Link to="/" className="text-[#E6ECF4] hover:text-white transition-colors">Home</Link>
          <Link to="#" className="text-[#E6ECF4] hover:text-white transition-colors">About</Link>
          <Link to="/services" className="text-[#E6ECF4] hover:text-white transition-colors">Services</Link>
          <Link to="#" className="text-[#E6ECF4] hover:text-white transition-colors">Resources</Link>
          <Link to="#" className="text-[#E6ECF4] hover:text-white transition-colors">Contact</Link>
          <Button variant="default" className="bg-transparent hover:bg-[#00296b] border border-[#E6ECF4] text-[#E6ECF4]">
            Book Consultation
          </Button>
        </div>
      </div>
    </nav>
  );
}
