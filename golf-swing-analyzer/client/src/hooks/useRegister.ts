import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../api/registerUser";

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
export const useLogin = () => {
    return useMutation<registerResponse, Error, registerPayload>({
      mutationFn: registerUser,
      retry: 0,
      onSuccess: (data) => {
        localStorage.setItem('token', data.token);
      },
    });
  };