import request from 'superagent';
import { getApiServer } from '../utils/domain';

export interface Video {
  id: number;
  original_name: string;
  path: string;
  uploaded_at: string;
}

export const getVideos = async (): Promise<Video[]> => {
  const res = await request.get(`${getApiServer()}/allVideos`);
  return res.body;
};
