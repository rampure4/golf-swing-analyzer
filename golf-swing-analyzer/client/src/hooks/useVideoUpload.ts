import { useMutation } from '@tanstack/react-query';
import { uploadVideo, FileResponse } from '../api/uploadVideo';

export const useVideoUpload = () => {
  return useMutation<FileResponse, Error, File>({
    mutationFn: uploadVideo,
    retry: 0
  });
};
