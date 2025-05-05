// routes/uploadRoutes.js
import express from 'express';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import { getAllVideos } from '../controllers/uploadController.js';
import { getDB } from '../config/db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Multer storage config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const base = path.basename(file.originalname, ext);
    const uniqueSuffix = Date.now();
    cb(null, `${base}-${uniqueSuffix}${ext}`);
  },
});

const fileFilter = function (req, file, cb) {
  if (file.mimetype && file.mimetype.startsWith('video/')) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({ storage, fileFilter });

export const uploadRoutes = () => {
  const router = express.Router();

  // GET all videos
  router.get('/allVideos', getAllVideos);

  // POST /upload
  router.post('/upload', upload.single('video'), async (req, res) => {
    const db = getDB();
    const file = req.file;

    if (!file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    try {
      const query = 'INSERT INTO videos (filename, path) VALUES (?, ?)';
      const [result] = await db.query(query, [file.originalname, file.path]);

      res.status(200).json({ message: 'Upload successful', fileId: result.insertId });
    } catch (err) {
      console.error('❌ DB Insert Error:', err.message);
      res.status(500).json({ error: 'Database insert failed' });
    }
  });

  return router;
};
