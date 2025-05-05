// index.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { logger } from './middleware/logger.js';
import { uploadRoutes } from './routes/uploadRoutes.js';
import { authRoutes } from './routes/auth.js';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Serve uploaded files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());
app.use(logger);

app.use((req, res, next) => {
  console.log(`➡️  ${req.method} ${req.url}`);
  next();
});


app.use('/api', authRoutes());
app.use('/', uploadRoutes());

app.get('/', (req, res) => {
  res.json("from backend side");
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
