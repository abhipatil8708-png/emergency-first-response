import { Outlet, NavLink } from 'react-router-dom';
import { Home, MapPin, Activity } from 'lucide-react';
import FloatingChatbot from './FloatingChatbot';
import EmergencyCallAction from './EmergencyCallAction';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <main className="flex-1 pb-16">
        <Outlet />
      </main>

      <FloatingChatbot />
      <EmergencyCallAction />

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 flex justify-around items-center h-16 px-4 z-40 shadow-lg">
        <NavLink 
          to="/dashboard" 
          className={({ isActive }) => `flex flex-col items-center justify-center w-full h-full ${isActive ? 'text-blue-600' : 'text-slate-500 hover:text-slate-900'}`}
        >
          <Home className="w-6 h-6 mb-1" />
          <span className="text-[10px] font-medium">Dashboard</span>
        </NavLink>
        <NavLink 
          to="/tracking" 
          className={({ isActive }) => `flex flex-col items-center justify-center w-full h-full ${isActive ? 'text-blue-600' : 'text-slate-500 hover:text-slate-900'}`}
        >
          <MapPin className="w-6 h-6 mb-1" />
          <span className="text-[10px] font-medium">Tracking</span>
        </NavLink>
        <NavLink 
          to="/blood-support" 
          className={({ isActive }) => `flex flex-col items-center justify-center w-full h-full ${isActive ? 'text-blue-600' : 'text-slate-500 hover:text-slate-900'}`}
        >
          <Activity className="w-6 h-6 mb-1" />
          <span className="text-[10px] font-medium">Support</span>
        </NavLink>
      </nav>
    </div>
  );
}
