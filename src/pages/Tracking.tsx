import { useState } from 'react';
import { MapPin, Navigation, Ambulance, AlertOctagon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Tracking() {
  const [eta] = useState('8 mins');
  const [distance] = useState('2.4 km');

  return (
    <div className="relative h-screen flex flex-col">
      {/* Map Area (Mocked for UI purposes) */}
      <div className="flex-1 bg-slate-200 relative overflow-hidden">
        {/* Placeholder for actual Google Map / Mapbox */}
        <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/13.4,52.5,13,0/800x600?access_token=pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJjaXhhbXBsZSJ9.example')] bg-cover bg-center opacity-50 blur-[2px]"></div>
        
        {/* Simulated Map Elements */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <MapPin className="w-10 h-10 text-blue-600 drop-shadow-lg" />
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-1 bg-black/20 rounded-full blur-[2px]"></div>
          </div>
        </div>

        <motion.div 
          animate={{ x: [0, 20, 40], y: [0, -10, -20] }}
          transition={{ repeat: Infinity, duration: 5, ease: "linear", repeatType: "mirror" }}
          className="absolute top-1/3 left-1/4"
        >
          <div className="bg-white p-2 rounded-full shadow-lg border-2 border-red-500">
            <Ambulance className="w-6 h-6 text-red-600" />
          </div>
        </motion.div>
      </div>

      {/* Info Panel Overlay */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="absolute bottom-20 left-0 right-0 p-4"
      >
        <div className="bg-white rounded-3xl shadow-2xl p-5 border border-slate-100">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2 text-red-600 font-bold bg-red-50 px-3 py-1.5 rounded-full">
              <AlertOctagon className="w-4 h-4" />
              <span>Critical Emergency</span>
            </div>
            <div className="text-right">
              <p className="text-xs text-slate-500 font-medium">ETA</p>
              <p className="text-2xl font-bold text-slate-800">{eta}</p>
            </div>
          </div>

          <div className="flex gap-4 mb-4">
            <div className="flex-1 bg-slate-50 rounded-2xl p-3 flex flex-col items-center justify-center border border-slate-100">
              <Navigation className="w-5 h-5 text-blue-500 mb-1" />
              <p className="text-xs text-slate-500">Distance</p>
              <p className="font-semibold text-slate-800">{distance}</p>
            </div>
            <div className="flex-1 bg-slate-50 rounded-2xl p-3 flex flex-col items-center justify-center border border-slate-100">
              <Ambulance className="w-5 h-5 text-red-500 mb-1" />
              <p className="text-xs text-slate-500">Vehicle</p>
              <p className="font-semibold text-slate-800">Unit 42</p>
            </div>
          </div>

          <button className="w-full bg-slate-900 text-white font-medium py-3.5 rounded-xl hover:bg-slate-800 transition-colors shadow-md">
            Contact Driver
          </button>
        </div>
      </motion.div>
    </div>
  );
}
