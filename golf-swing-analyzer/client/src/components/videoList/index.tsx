import { useVideos } from '../../hooks/useVideos';

const VideoList = () => {
  const { data: videos, isLoading, error } = useVideos();
  
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Uploaded Videos</h2>
      <ul>
        {videos?.map((video) => (
          <li key={video.id}>
          <p>{video.original_name}</p>
          <video width="320" height="240" controls>
            <source src={`http://localhost:5001/${video.path}`} type="video/mp4" />
            Your browser does not support the video tag. Please try to upload a another video
          </video>
        </li>
        ))}
      </ul>
    </div>
  );
};

export default VideoList;
