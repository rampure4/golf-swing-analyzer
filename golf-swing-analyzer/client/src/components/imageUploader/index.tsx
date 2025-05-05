import React, { useState } from "react";
import { useVideoUpload } from "../../hooks/useVideoUpload";

const ImageUploader = () => {
  const [video, setVideo] = useState<File | null>(null);
  const { mutate: uploadVideo, status, data, error } = useVideoUpload();

  const isLoading = status === "pending";
  const isSuccess = status === "success";
  const isError = status === "error";

  const handleUpload = () => {
    if (!video) {
      alert("Please select a video first.");
      return;
    }

    uploadVideo(video, {
      onSuccess: () => setVideo(null),
    });
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <h2 className="mb-4">Upload Golf Swing</h2>

      <div className="mb-3">
        <input
          type="file"
          accept="video/*"
          className="form-control"
          onChange={(e) => {
            const selected = e.target.files?.[0];
            console.log("Selected file:", selected);
            setVideo(selected || null);
            e.target.value = ""; // allow same file reselect
          }}
        />
      </div>

      {video && <p className="text-muted">Selected: {video.name}</p>}

      <button
        className="btn btn-primary"
        onClick={handleUpload}
        disabled={!video || isLoading}
      >
        {isLoading ? "Uploading..." : "Upload Video"}
      </button>

      <div className="mt-3">
        {isSuccess && (
          <div className="alert alert-success">
            ✅ Uploaded! File ID: {data?.fileId}
          </div>
        )}
        {isError && (
          <div className="alert alert-danger">
            ❌ Upload failed: {(error as Error).message}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
