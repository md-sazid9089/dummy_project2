import Housing from '../models/Housing.js';

export const getAllHousing = async (req, res) => {
  const items = await Housing.find();
  res.json(items);
};

export const createHousing = async (req, res) => {
  try {
    const item = await Housing.create(req.body);
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
