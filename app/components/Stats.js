import { CheckCircle } from 'lucide-react';

const stats = [
  { label: "SKUs Available", value: "7 Lakh+" },
  { label: "Active Stores", value: "50+" },
  { label: "Established", value: "2015" },
  { label: "Happy Partners", value: "100%" },
];

export default function Stats() {
  return (
    <section className="bg-blue-900 text-white py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-blue-700">
          {stats.map((stat, index) => (
            <div key={index} className="p-4">
              <h3 className="text-4xl font-extrabold text-white mb-1">{stat.value}</h3>
              <p className="text-blue-200 font-medium uppercase text-sm tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}