import axios from 'axios';

const fetchWithAuth = (url, options = {}) => {
  const token = localStorage.getItem('authToken');
  console.log('Authorization Header:', `Bearer ${token}`);
  return axios(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    },
  });
};

export default fetchWithAuth;
