import pkg from 'pg';

const { Pool } = pkg;

// Package pg akan secara otomatis membaca variabel environment 
// PGUSER, PGHOST, PGPASSWORD, PGDATABASE, dan PGPORT dari file .env
const pool = new Pool();

export default pool;