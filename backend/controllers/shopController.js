import Shop from '../models/Shop.js';

export const getShops = async (req, res) => {
  const shops = await Shop.find();
  res.json(shops);
};
