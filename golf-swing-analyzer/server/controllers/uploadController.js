const db = require('../config/db');

const uploadVideo = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'Only video files are allowed' });
  }

  const { originalname, filename } = req.file;
  const sql = 'INSERT INTO videos (original_name, stored_name) VALUES (?, ?)';

  db.query(sql, [originalname, filename], (err, result) => {
    if (err) {
      console.error('DB error:', err.message);
      return res.status(500).json({ message: 'DB error', error: err.message });
    }

    res.status(200).json({
      message: 'File uploaded and stored in DB',
      fileId: result.insertId
    });
  });
};

module.exports = { uploadVideo };
