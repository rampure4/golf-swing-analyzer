import request from 'superagent';
import { getApiServer } from '../utils/domain';

export interface FileResponse {
  fileId: number;
  message: string;
}

export const uploadVideo = async (file: File): Promise<FileResponse> => {
  const formData = new FormData();
  formData.append('video', file, file.name);

  const res = await request
    .post(`${getApiServer()}/upload`)
    .send(formData)
    .withCredentials();

  return res.body;
};
