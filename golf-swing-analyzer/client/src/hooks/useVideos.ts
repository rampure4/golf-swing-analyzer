import { useQuery } from '@tanstack/react-query';
import { getVideos, Video } from '../api/getVideos';

export const useVideos = () => {
  return useQuery<Video[], Error>({
    queryKey: ['videos'],
    queryFn: getVideos
  });
};
