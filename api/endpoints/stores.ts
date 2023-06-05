import { axiosInstance } from '../axios';

const getStores = async (id?: number) => {
  const url = id ? `/stores/${id}` : '/stores';
  try {
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const getServices = async (id?: number) => {
  const url = id ? `/services/${id}` : '/services';
  try {
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const createUser = async (loginData: { username: string; email: string; password: string; password2: string; is_customer: boolean; is_service_provider: boolean; }) => {
  const url = '/users';
  try {
    const response = await axiosInstance.post(url, loginData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { getStores, getServices, createUser };
