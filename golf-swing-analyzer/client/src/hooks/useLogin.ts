import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../api/authUser";

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

export const useLogin = () => {
    return useMutation<LoginResponse, Error, LoginPayload>({
      mutationFn: loginUser,
      retry: 0,
      onSuccess: (data) => {
        localStorage.setItem('token', data.token);
      },
    });
  };