import request from 'superagent';
import { getApiServer } from '../utils/domain';

export interface FileResponse {
  fileId: number;
  message: string;
}

export const uploadVideo = async (file: File): Promise<FileResponse> => {
  const formData = new FormData();
  formData.append('video', file); // 'video' must match multer field name

  const res = await request
    .post(`${getApiServer()}/upload`)
    .send(formData) // ✅ correct for browser FormData
    .withCredentials();

  return res.body;
};
