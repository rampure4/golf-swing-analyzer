const isVideoFile = (mimetype) => {
  return mimetype && mimetype.startsWith('video/');
};

module.exports = { isVideoFile };
