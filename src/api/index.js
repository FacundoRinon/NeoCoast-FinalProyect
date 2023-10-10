import axios from 'axios';

const axiosInstance = (apiKey) => {
  const instance = axios.create({
    url: 'https://api.themoviedb.org/3',
    params: {
      api_key: apiKey,
    },
  });
  return instance;
};

export default axiosInstance;
