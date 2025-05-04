import request from 'superagent';
import { getApiServer } from '../utils/domain';

export interface FileResponse {
  fileId: number;
  message: string;
}

export const uploadVideo = async (file: File): Promise<FileResponse> => {
  const blob = new Blob([file], { type: file.type }); // ✅ ensure it's a Blob

  const res = await request
    .post(`${getApiServer()}/upload`)
    .attach('video', blob as any, file.name) // ✅ workaround type mismatch
    .withCredentials();

  return res.body;
};
