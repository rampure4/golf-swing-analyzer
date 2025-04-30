const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { uploadVideo } = require('../controllers/uploadController');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const base = path.basename(file.originalname, ext);
    const uniqueSuffix = Date.now();
    cb(null, `${base}-${uniqueSuffix}${ext}`);
  }
});

const fileFilter = function (req, file, cb) {
  if (file.mimetype && file.mimetype.startsWith('video/')) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({ storage, fileFilter });

router.post('/upload', upload.single('video'), uploadVideo);

module.exports = router;
