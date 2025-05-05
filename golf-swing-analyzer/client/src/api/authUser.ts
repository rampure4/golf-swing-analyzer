import request from "superagent";
import { getApiServer } from "../utils/domain";


interface LoginPayload {
    email: string;
    password: string;
  }
  
  interface LoginResponse {
    token: string;
    user: {
      id: number;
      email: string;
    };
  }

export const loginUser = async (payload: LoginPayload): Promise<LoginResponse> => {
    const res = await request
    .post(`${getApiServer()}/api/login`)
    .send(payload);

  return res.body;
}