import { Router } from 'express';
import { getMaids } from '../controllers/maidController.js';

const router = Router();

router.get('/', getMaids);

export default router;
