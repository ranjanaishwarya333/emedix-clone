import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Column 1 */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">EMEDIX</h2>
          <p className="text-sm leading-relaxed mb-6">
            EMEDIX Wellness Pvt Ltd is a leading pharmacy franchise company ensuring authentic medicines and high-quality healthcare products.
          </p>
          <div className="flex gap-4">
            <Facebook className="hover:text-blue-500 cursor-pointer transition" size={20}/>
            <Instagram className="hover:text-pink-500 cursor-pointer transition" size={20}/>
            <Linkedin className="hover:text-blue-400 cursor-pointer transition" size={20}/>
            <Twitter className="hover:text-blue-400 cursor-pointer transition" size={20}/>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-white font-bold mb-6">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Franchise Inquiry</li>
            <li className="hover:text-white cursor-pointer">Store Locator</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-white font-bold mb-6">Legal</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-white cursor-pointer">Disclaimer</li>
            <li className="hover:text-white cursor-pointer">Support</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-white font-bold mb-6">Contact Info</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <span className="text-blue-500 font-bold">A.</span>
              602 Block B, Ashiana Chambers, Exhibition Rd, Patna, Bihar
            </li>
            <li className="flex gap-3">
              <span className="text-blue-500 font-bold">P.</span>
              +91-7281999988
            </li>
            <li className="flex gap-3">
              <span className="text-blue-500 font-bold">E.</span>
              support@emedix.in
            </li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-xs text-gray-500">
        © 2026 EMEDIX Wellness Pvt Ltd. All rights reserved. Clone by Gemini.
      </div>
    </footer>
  );
}