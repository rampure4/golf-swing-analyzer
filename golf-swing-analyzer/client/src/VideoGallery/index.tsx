import { useVideos } from "../hooks/useVideos";
import Card from "../components/Card";

const VideoGallery = () => {
  const { data: videos, isLoading, error } = useVideos();

  if (isLoading) return <p>Loading videos...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "2rem 1rem",
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
        marginLeft: "240px", // match sidebar width
      }}
    >
      <div style={{ width: "100%", maxWidth: "500px" }}>
        {videos?.length === 0 ? (
          <p>No videos uploaded yet.</p>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {videos?.map((video) => (
              <Card key={video.id}>
                <video
                  controls
                  style={{
                    width: "100%",
                    borderRadius: "12px",
                    marginBottom: "0.75rem",
                  }}
                >
                  <source
                    src={`http://localhost:5001/${video.path}`}
                    type="video/mp4"
                  />
                </video>
                <h3 style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>
                  {video.original_name}
                </h3>
                <p style={{ fontSize: "0.8rem", color: "#666" }}>
                  Uploaded: {new Date(video.uploaded_at).toLocaleString()}
                </p>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoGallery;
