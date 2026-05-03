import { Phone } from 'lucide-react';

export default function EmergencyCallAction() {
  return (
    <div className="fixed bottom-20 left-4 z-50">
      <a 
        href="tel:911" 
        className="group relative flex items-center justify-center w-14 h-14 bg-red-600 text-white rounded-full shadow-xl hover:bg-red-700 transition-colors animate-pulse"
      >
        <Phone className="w-6 h-6" />
        <span className="absolute left-16 bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
          Call Emergency
        </span>
      </a>
    </div>
  );
}
