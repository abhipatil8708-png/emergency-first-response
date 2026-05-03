import { Droplet, MapPin, Search, AlertTriangle, PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';

const donors = [
  { id: 1, name: 'Sarah Jenkins', bloodGroup: 'O-', distance: '0.8 km', match: true },
  { id: 2, name: 'Michael Chen', bloodGroup: 'O+', distance: '1.2 km', match: false },
  { id: 3, name: 'David Smith', bloodGroup: 'O-', distance: '2.5 km', match: true },
];

export default function BloodSupport() {
  return (
    <div className="min-h-screen bg-slate-50 p-4 pb-24">
      <header className="pt-4 mb-6">
        <h2 className="text-2xl font-bold text-slate-800">Blood & Support</h2>
        <p className="text-sm text-slate-500">Find critical resources fast.</p>
      </header>

      {/* User Blood Info */}
      <div className="bg-red-600 rounded-3xl p-6 text-white mb-6 shadow-lg shadow-red-200 relative overflow-hidden">
        <div className="absolute -right-4 -top-4 opacity-10">
          <Droplet className="w-40 h-40" />
        </div>
        <div className="relative z-10 flex justify-between items-end">
          <div>
            <p className="text-red-100 text-sm font-medium mb-1">Your Blood Group</p>
            <h3 className="text-5xl font-bold">O<span className="text-3xl">-</span></h3>
          </div>
          <button className="bg-white text-red-600 px-4 py-2 rounded-xl text-sm font-bold shadow-sm hover:bg-red-50 transition-colors">
            Request Blood
          </button>
        </div>
      </div>

      {/* Critical Alert Mode Banner */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-red-50 border-2 border-red-200 rounded-2xl p-4 mb-8 flex items-start gap-3"
      >
        <AlertTriangle className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
        <div>
          <h4 className="font-bold text-red-800">Critical Mode Active</h4>
          <p className="text-sm text-red-600 mt-1">Faster routing enabled. Searching for super-specialty hospitals with trauma centers nearby.</p>
        </div>
      </motion.div>

      {/* Nearby Donors */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-slate-800 text-lg">Nearby Donors</h3>
        <button className="p-2 bg-white rounded-full shadow-sm text-slate-600">
          <Search className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-3">
        {donors.map((donor, idx) => (
          <motion.div 
            key={donor.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={`bg-white rounded-2xl p-4 flex items-center justify-between border ${donor.match ? 'border-green-200 shadow-sm shadow-green-50' : 'border-slate-100'}`}
          >
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${donor.match ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600'}`}>
                {donor.bloodGroup}
              </div>
              <div>
                <h4 className="font-semibold text-slate-800">{donor.name}</h4>
                <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3" />
                  {donor.distance} away
                </p>
              </div>
            </div>
            
            {donor.match && (
              <button className="bg-green-600 text-white p-2.5 rounded-full hover:bg-green-700 transition-colors shadow-sm">
                <PhoneCall className="w-4 h-4" />
              </button>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
