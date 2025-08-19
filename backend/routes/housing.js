import { Router } from 'express';
import { getAllHousing, createHousing } from '../controllers/housingController.js';

const router = Router();

router.get('/', getAllHousing);
router.post('/', createHousing);

export default router;
