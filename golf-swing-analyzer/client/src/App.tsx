import React, { useState } from 'react';
import { useVideoUpload } from './hooks/useVideoUpload';

function App() {
  const [video, setVideo] = useState<File | null>(null);
  const mutation = useVideoUpload();

  const {
    mutate: uploadVideo,
    status,
    data,
    error
  } = useVideoUpload();
  
  const isLoading = status === 'pending';
  const isSuccess = status === 'success';
  const isError = status === 'error';
  
  const handleUpload = () => {
    if (video) {
      uploadVideo(video, {
        onSuccess: () => setVideo(null)
      });
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Upload Golf Swing</h1>

      <input
        type="file"
        accept="video/*"
        onChange={(e) => setVideo(e.target.files?.[0] || null)}
      />
      {video && <p>Selected: {video.name}</p>}

      <button onClick={handleUpload} disabled={!video || isLoading} style={{ marginTop: '1rem' }}>
        {isLoading ? 'Uploading...' : 'Upload Video'}
      </button>

      {isSuccess && <p>✅ Uploaded! File ID: {data?.fileId}</p>}
      {isError && <p>❌ Upload failed: {(error as Error).message}</p>}
    </div>
  );
}

export default App;
