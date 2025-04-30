const express = require('express');
const cors = require('cors');
const multer = require('multer');
require('dotenv').config();
const logger = require('./middleware/logger');
const uploadRoutes = require('./routes/uploadRoutes');

const app = express();


app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());
app.use(logger);

app.use((req, res, next) => {
  console.log(`➡️  ${req.method} ${req.url}`);
  next();
});

app.use('/', uploadRoutes);

app.get('/', (req, res) => {
  return res.json("from backend side");
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
