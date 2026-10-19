import { Router } from 'express';
import notes from '../services/notes/routes.js';

const router = Router();

router.use('/', notes);

export default router;