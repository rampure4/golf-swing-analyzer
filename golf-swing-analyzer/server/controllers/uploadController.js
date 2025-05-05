import { getDB } from '../config/db.js';

export const getAllVideos = async (req, res) => {
  const db = getDB();
  try {
    const [rows] = await db.query('SELECT * FROM videos ORDER BY uploaded_at DESC');
    res.json(rows);
  } catch (err) {
    console.error('Error fetching videos:', err.message);
    res.status(500).json({ error: 'Database error' });
  }
};

export const uploadVideo = async (req, res) => {
  const db = getDB();

  if (!req.file) {
    return res.status(400).json({ message: 'Only video files are allowed' });
  }

  const { originalname, filename } = req.file;
  const sql = 'INSERT INTO videos (original_name, stored_name) VALUES (?, ?)';

  try {
    const [result] = await db.execute(sql, [originalname, filename]);

    res.status(200).json({
      message: 'File uploaded and stored in DB',
      fileId: result.insertId,
    });
  } catch (err) {
    console.error('DB error:', err.message);
    res.status(500).json({ message: 'DB error', error: err.message });
  }
};
