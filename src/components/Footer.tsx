export const Footer = () => {
  return (
    <footer className="bg-[#0047CC] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">Walker Insurance</h3>
            <p className="text-gray-300">Protecting Your Income.<br />Preserving Your Legacy.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <p className="text-gray-300">Email: info@walkerinsurance.ca<br />Phone: (123) 456-7890</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Office Hours</h3>
            <p className="text-gray-300">Monday - Friday: 9am - 5pm<br />Weekends: By appointment</p>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Walker Insurance & Estate Planning Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
