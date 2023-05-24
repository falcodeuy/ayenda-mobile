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

export { getStores, getServices };
