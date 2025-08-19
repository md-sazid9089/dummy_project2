import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const [profile, setProfile] = useState({ name: '', email: '', phone: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setProfile({ ...profile, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put('/api/user/profile', profile);
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = async () => {
    await axios.post('/api/auth/logout');
    navigate('/login');
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" value={profile.name} onChange={handleChange} placeholder="Name" className="w-full border p-2" />
        <input name="email" value={profile.email} onChange={handleChange} placeholder="Email" className="w-full border p-2" />
        <input name="phone" value={profile.phone} onChange={handleChange} placeholder="Phone" className="w-full border p-2" />
        <button className="w-full bg-blue-600 text-white py-2 rounded">Save</button>
      </form>
      <button onClick={handleLogout} className="mt-4 w-full text-sm text-red-600">Sign out</button>
    </div>
  );
};

export default ProfilePage;
