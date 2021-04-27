import express from 'express';
const router = express.Router();
import { authUser, getUserProfile } from '../controllers/userControllers.js';
import { protect } from '../middleWare/authMiddleware.js';

router.post('/login', authUser);
router.route('/profile').get(protect, getUserProfile);

export default router;
