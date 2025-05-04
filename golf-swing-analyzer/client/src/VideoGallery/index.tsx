import { useVideos } from "../hooks/useVideos";
import Card from "../components/Card";


const VideoGallery = () => {
  const { data: videos, isLoading, error } = useVideos();

  if (isLoading) return <p>Loading videos...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log('videos', videos)

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ marginBottom: '1rem' }}>Video Gallery</h1>

      {videos?.length === 0 ? (
        <p>No videos uploaded yet.</p>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {videos?.map((video) => (
            <Card>
              <h3 style={{ fontSize: '1rem' }}>{video.original_name}</h3>
              <video width="100%" controls>
                <source src={`http://localhost:5001/${video.path}`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p style={{ fontSize: '0.8rem', color: '#555' }}>
                Uploaded: {new Date(video.uploaded_at).toLocaleString()}
              </p>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoGallery;
