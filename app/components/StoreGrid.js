import { MapPin, ArrowRight } from 'lucide-react';

const stores = [
  { city: "Patna", location: "Ramnagri", status: "Open" },
  { city: "Patna", location: "Gola Road", status: "Open" },
  { city: "Ranchi", location: "Bariatu", status: "Open" },
  { city: "Muzaffarpur", location: "Ramdayalu", status: "Open" },
  { city: "Bokaro", location: "Sector 4", status: "Open" },
  { city: "Gaya", location: "Sherghati", status: "Coming Soon" },
  { city: "Dhanbad", location: "Naya Bazar", status: "Open" },
  { city: "Deoghar", location: "Tower Chowk", status: "Coming Soon" },
];

export default function StoreGrid() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold tracking-wider text-sm uppercase">Our Presence</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Expanding Across Bihar & Jharkhand</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {stores.map((store, index) => (
            <div key={index} className="bg-white border border-gray-100 p-6 rounded-xl hover:shadow-xl transition duration-300 group cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-blue-600 transform -translate-x-1 group-hover:translate-x-0 transition duration-300"></div>
              
              <div className="flex justify-between items-start mb-4">
                <div className="bg-blue-50 p-3 rounded-full text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition duration-300">
                  <MapPin size={24} />
                </div>
                {store.status === "Coming Soon" ? (
                  <span className="bg-yellow-100 text-yellow-800 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide">Soon</span>
                ) : (
                  <span className="bg-green-100 text-green-800 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide">Open</span>
                )}
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-700 transition">{store.city}</h3>
              <p className="text-gray-500 text-sm mt-1">{store.location}</p>
              
              <div className="mt-6 flex items-center text-blue-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition transform translate-y-2 group-hover:translate-y-0">
                View on Map <ArrowRight size={16} className="ml-1" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <button className="border border-gray-300 text-gray-600 px-8 py-3 rounded-full hover:bg-gray-100 transition font-medium">
                View All Locations
            </button>
        </div>
      </div>
    </section>
  );
}