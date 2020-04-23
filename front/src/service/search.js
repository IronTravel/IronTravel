import service from './_base';
import { Search } from 'react-feather';

//Search
export const searchUser = async (data) => {

    console.log(data)
    return await service.post('search',{data})
}