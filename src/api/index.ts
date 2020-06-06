import axiosClient from './axios';

export const fetchMenu = async (): Promise<any> => {
  const response = await axiosClient.get<any>(`/menu`);

  return response.data;
};

export const fetchSections = async (): Promise<any> => {
  const response = await axiosClient.get<any>(`/sections`);

  return response.data;
};

export const fetchItems = async (): Promise<any> => {
  const response = await axiosClient.get<any>(`/items`);

  return response.data;
};
