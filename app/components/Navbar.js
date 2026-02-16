import Link from 'next/link';
import { Phone, MapPin, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm font-sans">
      {/* Top Utility Bar */}
      <div className="bg-blue-900 text-white text-xs py-2 px-4 md:px-10 flex justify-between items-center">
        <div className="flex gap-6">
          <span className="flex items-center gap-2 hover:text-orange-400 cursor-pointer transition">
            <Phone size={14}/> +91-7281999988
          </span>
          <span className="flex items-center gap-2 hover:text-orange-400 cursor-pointer transition">
            <MapPin size={14}/> Patna, Bihar
          </span>
        </div>
        <div className="hidden md:block opacity-90">Best Pharmacy Franchise in Bihar & Jharkhand</div>
      </div>

      {/* Main Navigation */}
      <nav className="flex justify-between items-center px-4 md:px-10 py-4 border-b border-gray-100">
        {/* Logo Area */}
        <div className="flex items-center gap-2">
           <div className="bg-blue-700 text-white p-1 rounded font-bold text-xl">EM</div>
           <div className="text-2xl font-extrabold text-blue-900 tracking-tight">
            EMEDIX <span className="text-green-600 text-sm font-semibold">Wellness</span>
          </div>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium text-gray-600 text-[15px]">
          <Link href="#" className="text-blue-700 font-semibold">Home</Link>
          <Link href="#" className="hover:text-blue-700 transition">About Us</Link>
          <Link href="#" className="hover:text-blue-700 transition">Franchise</Link>
          <Link href="#" className="hover:text-blue-700 transition">Our Stores</Link>
          <Link href="#" className="hover:text-blue-700 transition">Contact</Link>
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-bold text-sm transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Enquire Now
          </button>
          {/* Mobile Menu Icon */}
          <button className="md:hidden text-gray-700">
            <Menu size={28} />
          </button>
        </div>
      </nav>
    </header>
  );
}