import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HousingPage from './pages/HousingPage';
import ShopsPage from './pages/ShopsPage';
import MaidPage from './pages/MaidPage';
import MapPage from './pages/MapPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<HousingPage />} />
        <Route path="/shops" element={<ShopsPage />} />
        <Route path="/maids" element={<MaidPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
