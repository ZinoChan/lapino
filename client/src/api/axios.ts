import axios from 'axios';


axios.defaults.baseURL = import.meta.env.VITE_BASE_URL


axios.interceptors.response.use(
  (response) => response,
  (err) => Promise.reject(err),
);

const httpRequest = (req: any) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios(req);

      resolve(response.data.data);
    } catch (err: any) {
      reject(err?.response?.data || {});
    }
  });
};

export default httpRequest;
