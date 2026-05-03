import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Camera, Mic, Clock, ShieldAlert, CheckCircle, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function EmergencyDetail() {
  const { type } = useParams();
  const navigate = useNavigate();

  // Mock data mapping based on type
  const title = type?.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') || 'Emergency';

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <div className="bg-red-600 text-white pt-6 pb-12 px-4 rounded-b-[40px] relative">
        <button onClick={() => navigate(-1)} className="absolute top-6 left-4 p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-center text-2xl font-bold mt-2">{title}</h1>
        
        <div className="mt-8 bg-white/10 backdrop-blur-md rounded-2xl p-4 flex items-center justify-between border border-white/20">
          <div className="flex items-center gap-3">
            <Clock className="w-8 h-8 text-yellow-300" />
            <div>
              <p className="text-sm font-medium text-red-100">Critical Response Window</p>
              <p className="text-xl font-bold">Act within: 10–15 mins</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 -mt-6 space-y-4">
        {/* Input Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-sm p-4">
          <h3 className="font-semibold text-slate-800 mb-3">Describe Symptoms</h3>
          <textarea 
            placeholder="Type symptoms here..." 
            className="w-full bg-slate-50 border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-500 min-h-[80px] resize-none"
          ></textarea>
          <div className="flex gap-2 mt-3">
            <button className="flex-1 flex items-center justify-center gap-2 bg-slate-100 text-slate-600 py-2.5 rounded-xl text-sm font-medium hover:bg-slate-200 transition-colors">
              <Camera className="w-4 h-4" />
              Upload Photo
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 bg-slate-100 text-slate-600 py-2.5 rounded-xl text-sm font-medium hover:bg-slate-200 transition-colors">
              <Mic className="w-4 h-4" />
              Voice Input
            </button>
          </div>
        </motion.div>

        {/* AI Response Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="bg-red-50 p-4 border-b border-red-100 flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-red-600" />
            <h3 className="font-bold text-red-800">Immediate Actions (Critical)</h3>
          </div>
          <div className="p-4 space-y-4">
            <div>
              <h4 className="flex items-center gap-2 font-semibold text-green-700 mb-2">
                <CheckCircle className="w-4 h-4" /> DOs
              </h4>
              <ul className="text-sm text-slate-600 space-y-2 pl-6 list-disc">
                <li>Keep the person calm and still.</li>
                <li>Remove tight clothing or jewelry near the affected area.</li>
                <li>Position the affected area below the heart level if possible.</li>
              </ul>
            </div>
            
            <div className="pt-2 border-t border-slate-100">
              <h4 className="flex items-center gap-2 font-semibold text-red-700 mb-2">
                <XCircle className="w-4 h-4" /> DON'Ts
              </h4>
              <ul className="text-sm text-slate-600 space-y-2 pl-6 list-disc">
                <li>Do not attempt to suck out venom.</li>
                <li>Do not apply a tourniquet or ice.</li>
                <li>Do not give the person anything to eat or drink.</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
