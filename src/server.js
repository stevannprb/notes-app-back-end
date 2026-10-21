import 'dotenv/config'; // 1. Impor dotenv di paling atas
import server from './server/index.js';

// 2. Ambil host dan port langsung dari environment variables
const host = process.env.HOST;
const port = process.env.PORT;

server.listen(port, () => {
  console.log(`Server running at http://${host}:${port}`);
});