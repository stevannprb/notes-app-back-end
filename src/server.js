import express from 'express';
import cors from 'cors';
import routes from './routes.js';

const app = express();
const port = process.env.PORT || 5000;

// Mengaktifkan CORS agar aplikasi client dapat mengakses API backend
app.use(cors({
  origin: '*',
}));

// Parsing body request berbentuk JSON
app.use(express.json());

// Menggunakan router
app.use('/', routes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});