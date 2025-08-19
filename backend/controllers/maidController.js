import Maid from '../models/Maid.js';

export const getMaids = async (req, res) => {
  const maids = await Maid.find();
  res.json(maids);
};
