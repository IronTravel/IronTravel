import service from './_base';
import { Search } from 'react-feather';

//Search
export const searchUser = async (data) => {
    return await service.post('search',{data})
}