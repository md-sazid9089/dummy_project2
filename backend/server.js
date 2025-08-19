import express from 'express';
import next from 'next';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';
import housingRoutes from './routes/housing.js';
import shopRoutes from './routes/shops.js';
import maidRoutes from './routes/maids.js';
import userRoutes from './routes/user.js';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const PORT = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = express();
  server.use(express.json());

  server.use('/api/auth', authRoutes);
  server.use('/api/housing', housingRoutes);
  server.use('/api/shops', shopRoutes);
  server.use('/api/maids', maidRoutes);
  server.use('/api/user', userRoutes);

  server.all('*', (req, res) => handle(req, res));

  const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/bachelor_solution';
  mongoose
    .connect(MONGO_URL)
    .then(() => {
      server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
    })
    .catch((err) => console.error(err));
});
