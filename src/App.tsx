import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import EmergencyDetail from './pages/EmergencyDetail';
import Tracking from './pages/Tracking';
import BloodSupport from './pages/BloodSupport';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/emergency/:type" element={<EmergencyDetail />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/blood-support" element={<BloodSupport />} />
      </Route>
    </Routes>
  );
}

export default App;
