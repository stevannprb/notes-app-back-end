import { Router } from 'express';
import notesRoutes from '../services/notes/routes.js'; // Gunakan ../services

const router = Router();

router.use('/notes', notesRoutes);

export default router;