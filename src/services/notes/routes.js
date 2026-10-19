import express from 'express';
import {
  createNote,
  getNotes,
  getNoteById,
  editNoteById,
  deleteNoteById,
} from './controller.js';
import { validate, validateQuery } from '../../middlewares/validate.js';
import { notePayloadSchema, noteQuerySchema } from './schema.js';

const router = express.Router();

router.post('/', validate(notePayloadSchema), createNote);
router.get('/', validateQuery(noteQuerySchema), getNotes);
router.get('/:id', getNoteById);
router.put('/:id', validate(notePayloadSchema), editNoteById);
router.delete('/:id', deleteNoteById);

export default router;