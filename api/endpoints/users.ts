import { axiosInstance } from '../axios';

const createUser = async (signUpData: {
  username: string;
  email: string;
  password: string;
  password2: string;
  is_customer: boolean;
  is_service_provider: boolean;
}) => {
  const url = '/users/';

  const response = await axiosInstance.post(url, signUpData);
  return response.data;
};

const loginUser = async (loginData: { username: string; password: string }) => {
  const url = '/auth/token/';

  const response = await axiosInstance.post(url, loginData);
  return response.data;
};

export { createUser, loginUser };
