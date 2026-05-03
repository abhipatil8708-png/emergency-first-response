import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Bell, User as UserIcon, Activity, Heart, Brain, Flame, Wind, Droplet, Zap, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

const emergencies = [
  { id: 'accident', title: 'Accident', icon: AlertTriangle, color: 'bg-orange-500', route: '/emergency/accident' },
  { id: 'heart-attack', title: 'Heart Attack', icon: Heart, color: 'bg-red-500', route: '/emergency/heart-attack' },
  { id: 'stroke', title: 'Stroke', icon: Brain, color: 'bg-purple-500', route: '/emergency/stroke' },
  { id: 'snake-bite', title: 'Snake Bite', icon: Activity, color: 'bg-green-600', route: '/emergency/snake-bite' },
  { id: 'burns', title: 'Burns', icon: Flame, color: 'bg-orange-600', route: '/emergency/burns' },
  { id: 'breathing', title: 'Breathing Issues', icon: Wind, color: 'bg-blue-400', route: '/emergency/breathing' },
  { id: 'bleeding', title: 'Bleeding', icon: Droplet, color: 'bg-red-600', route: '/emergency/bleeding' },
  { id: 'shock', title: 'Electric Shock', icon: Zap, color: 'bg-yellow-500', route: '/emergency/shock' },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const filteredEmergencies = emergencies.filter(e => e.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="p-4 max-w-md mx-auto min-h-screen">
      <header className="flex justify-between items-center mb-6 pt-4">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Hi, Alex</h2>
          <p className="text-sm text-slate-500">Stay safe, act fast.</p>
        </div>
        <div className="flex gap-3">
          <button className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-600 relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <button className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
            <UserIcon className="w-5 h-5" />
          </button>
        </div>
      </header>

      <div className="relative mb-8">
        <Search className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
        <input 
          type="text" 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search emergency (e.g., snake bite)" 
          className="w-full bg-white border-0 shadow-sm rounded-2xl py-3.5 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-red-500 transition-shadow"
        />
      </div>

      <h3 className="font-semibold text-slate-800 mb-4">Emergency Categories</h3>
      
      <div className="grid grid-cols-2 gap-4">
        {filteredEmergencies.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            onClick={() => navigate(item.route)}
            className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-slate-50 flex flex-col items-center justify-center text-center gap-3 active:scale-95"
          >
            <div className={`w-12 h-12 rounded-full ${item.color} text-white flex items-center justify-center shadow-inner`}>
              <item.icon className="w-6 h-6" />
            </div>
            <span className="font-medium text-slate-700 text-sm">{item.title}</span>
          </motion.div>
        ))}
      </div>

      {filteredEmergencies.length === 0 && (
        <div className="text-center py-10 text-slate-500">
          No emergencies found matching "{search}".
        </div>
      )}
    </div>
  );
}
