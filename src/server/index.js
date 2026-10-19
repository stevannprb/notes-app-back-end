import express from 'express';
import routes from '../routes/index.js';
import ErrorHandler from '../middlewares/error.js';

const app = express();

app.use(express.json());
app.use(routes);

// Middleware error-handling wajib di paling bawah
app.use(ErrorHandler);

export default app;