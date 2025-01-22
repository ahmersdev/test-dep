import axios from 'axios';
import { Property } from '../interfaces/Property';

export const fetchProperties = async (): Promise<Property[]> => {
  const response = await axios.get<Property[]>('/api/properties');
  return response.data;
};

export const createProperty = async (property: Omit<Property, 'id'>): Promise<Property> => {
  const response = await axios.post<Property>('/api/properties', property);
  return response.data;
};
