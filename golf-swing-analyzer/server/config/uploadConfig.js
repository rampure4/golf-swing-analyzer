export const isVideoFile = (mimetype) => {
  return mimetype && mimetype.startsWith('video/');
};
