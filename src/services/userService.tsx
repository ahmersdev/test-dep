import axios from 'axios';
import { User } from '../interfaces/User';

export const fetchUsers = async (): Promise<User[]> => {
  const response = await axios.get<User[]>('/api/users'); // Type the response
  return response.data;
};
