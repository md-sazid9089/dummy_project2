import User from '../models/User.js';
import jwt from 'jsonwebtoken';

const jwtSecret = process.env.JWT_SECRET || 'secret';

const getUserId = (req) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return null;
  try {
    const decoded = jwt.verify(token, jwtSecret);
    return decoded.id;
  } catch {
    return null;
  }
};

export const getProfile = async (req, res) => {
  const userId = getUserId(req);
  if (!userId) return res.status(401).json({ error: 'Unauthorized' });
  const user = await User.findById(userId).select('-password');
  res.json(user);
};

export const updateProfile = async (req, res) => {
  const userId = getUserId(req);
  if (!userId) return res.status(401).json({ error: 'Unauthorized' });
  const user = await User.findByIdAndUpdate(userId, req.body, { new: true }).select('-password');
  res.json(user);
};
