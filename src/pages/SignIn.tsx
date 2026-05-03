import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, User, Phone, Mail, Droplet, Activity, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SignIn() {
  const navigate = useNavigate();
  const [locationEnabled, setLocationEnabled] = useState(false);

  const handleLocation = () => {
    // Mock asking for location
    setTimeout(() => {
      setLocationEnabled(true);
    }, 1000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden"
      >
        <div className="bg-red-600 p-8 text-center text-white">
          <Activity className="w-12 h-12 mx-auto mb-4" />
          <h1 className="text-2xl font-bold">First Response</h1>
          <p className="text-red-100 text-sm mt-2">Emergency Assistance Network</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Step 1 of 4</span>
            <div className="flex gap-1">
              <div className="w-8 h-1.5 bg-blue-600 rounded-full"></div>
              <div className="w-2 h-1.5 bg-slate-200 rounded-full"></div>
              <div className="w-2 h-1.5 bg-slate-200 rounded-full"></div>
              <div className="w-2 h-1.5 bg-slate-200 rounded-full"></div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <User className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
              <input type="text" placeholder="Full Name" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" required />
            </div>

            <div className="relative">
              <Phone className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
              <input type="tel" placeholder="Mobile Number" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" required />
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
              <input type="email" placeholder="Email (Gmail)" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" required />
            </div>

            <div className="relative">
              <Droplet className="absolute left-3 top-3 w-5 h-5 text-red-400" />
              <select className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-600 appearance-none">
                <option value="">Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </div>
          </div>

          <div className="pt-2">
            <button 
              type="button" 
              onClick={handleLocation}
              className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl border-2 transition-all ${locationEnabled ? 'border-green-500 bg-green-50 text-green-700' : 'border-blue-100 bg-blue-50 text-blue-600 hover:bg-blue-100'}`}
            >
              <MapPin className="w-5 h-5" />
              <span className="font-medium">{locationEnabled ? 'Live Location Enabled' : 'Enable Live Location'}</span>
            </button>
          </div>

          <button 
            type="submit" 
            className="w-full bg-slate-900 text-white font-medium py-3.5 rounded-xl hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 mt-6"
          >
            Continue to Dashboard
            <ChevronRight className="w-5 h-5" />
          </button>
        </form>
      </motion.div>
    </div>
  );
}
