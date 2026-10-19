import { Router } from 'express';
import notesRoutes from '../services/notes/routes.js';

const router = Router();

// Mengarahkan endpoint notes ke notesRoutes
router.use('/notes', notesRoutes);

export default router;