import axios from 'axios';

export function login(data){
  console.log(data);
  return dispatch => {
    return axios.post('/api/auth', data);
  };
}