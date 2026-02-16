export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white py-16 md:py-24 px-4 md:px-10 overflow-hidden">
      
      {/* Background Decorative Circle */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-100 rounded-full opacity-50 blur-3xl z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-4 py-1.5 rounded-full tracking-wide uppercase">
            #1 Pharmacy Network
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Start Your <span className="text-blue-700">Medical Franchise</span> Business
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Join the fastest growing pharmacy network in Bihar & Jharkhand. 
            We provide <strong>Monopoly Rights</strong>, <strong>Low Investment</strong>, and <strong>High ROI</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-blue-800 text-white px-8 py-3.5 rounded-lg font-bold hover:bg-blue-900 transition shadow-lg">
              Get Franchise Details
            </button>
            <button className="border-2 border-blue-800 text-blue-800 px-8 py-3.5 rounded-lg font-bold hover:bg-blue-50 transition">
              View Locations
            </button>
          </div>
          
          {/* Trust Badges */}
          <div className="pt-6 flex gap-8 justify-center lg:justify-start grayscale opacity-70">
             {/* Simple text placeholders for logos */}
             <span className="font-bold text-gray-400 text-xl">Sun Pharma</span>
             <span className="font-bold text-gray-400 text-xl">Cipla</span>
             <span className="font-bold text-gray-400 text-xl">Abbott</span>
          </div>
        </div>

        {/* Right Form (Lead Magnet) */}
        <div className="w-full lg:w-1/2">
          <div className="bg-white p-8 rounded-2xl shadow-2xl border-t-8 border-orange-500 max-w-md mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Enquire For Franchise</h3>
            <p className="text-gray-500 mb-6 text-sm">Fill out the form to get a callback within 24 hours.</p>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-blue-500 focus:bg-white transition" />
                <input type="text" placeholder="Last Name" className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-blue-500 focus:bg-white transition" />
              </div>
              <input type="tel" placeholder="Phone Number" className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-blue-500 focus:bg-white transition" />
              <input type="email" placeholder="Email Address" className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-blue-500 focus:bg-white transition" />
              <select className="w-full p-3 bg-gray-50 border border-gray-200 rounded text-gray-600 focus:outline-none focus:border-blue-500 focus:bg-white transition">
                <option>Select Your State</option>
                <option>Bihar</option>
                <option>Jharkhand</option>
                <option>West Bengal</option>
              </select>
              <button className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3.5 rounded-lg font-bold text-lg transition shadow-md hover:shadow-lg transform active:scale-95">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}