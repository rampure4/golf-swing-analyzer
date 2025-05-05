import request from "superagent";
import { getApiServer } from "../utils/domain";


interface registerPayload {
    email: string;
    password: string;
  }
  
  interface registerResponse {
    token: string;
    user: {
      id: number;
      email: string;
    };
  }

export const registerUser = async (payload: registerPayload): Promise<registerResponse> => {
    const res = await request
    .post(`${getApiServer()}/api/register`)
    .send(payload);

  return res.body;
}