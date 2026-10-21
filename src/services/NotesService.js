import { nanoid } from 'nanoid';
import pool from '../db/index.js'; // Mengimpor pool koneksi dari src/db/index.js
import { InvariantError, NotFoundError } from '../exceptions/index.js'; // Mengimpor custom error

class NotesService {
  constructor() {
    this._pool = pool;
  }

  // 1. Menambahkan catatan baru ke database
  async addNote({ title, body, tags }) {
    const id = `note-${nanoid(16)}`;
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    const query = {
      text: 'INSERT INTO notes VALUES($1, $2, $3, $4, $5, $6) RETURNING id',
      values: [id, title, body, tags, createdAt, updatedAt],
    };

    const result = await this._pool.query(query);

    if (!result.rows[0].id) {
      throw new InvariantError('Catatan gagal ditambahkan');
    }

    return result.rows[0].id;
  }

  // 2. Mengambil semua catatan dari database
  async getNotes() {
    const result = await this._pool.query('SELECT * FROM notes');
    return result.rows;
  }

  // 3. Mengambil catatan berdasarkan ID
  async getNoteById(id) {
    const query = {
      text: 'SELECT * FROM notes WHERE id = $1',
      values: [id],
    };

    const result = await this._pool.query(query);

    if (!result.rows.length) {
      throw new NotFoundError('Catatan tidak ditemukan');
    }

    return result.rows[0];
  }

  // 4. Mengubah catatan berdasarkan ID
  async editNoteById(id, { title, body, tags }) {
    const updatedAt = new Date().toISOString();
    const query = {
      text: 'UPDATE notes SET title = $1, body = $2, tags = $3, updated_at = $4 WHERE id = $5 RETURNING id',
      values: [title, body, tags, updatedAt, id],
    };

    const result = await this._pool.query(query);

    if (!result.rows.length) {
      throw new NotFoundError('Gagal memperbarui catatan. Id tidak ditemukan');
    }
  }

  // 5. Menghapus catatan berdasarkan ID
  async deleteNoteById(id) {
    const query = {
      text: 'DELETE FROM notes WHERE id = $1 RETURNING id',
      values: [id],
    };

    const result = await this._pool.query(query);

    if (!result.rows.length) {
      throw new NotFoundError('Catatan gagal dihapus. Id tidak ditemukan');
    }
  }
}

export default NotesService;