import axios from 'axios';
const apiWithoutToken = axios.create({
  withCredentials: true,
  /*NEW BASE URL*/
  baseURL: 'https://reqres.in/api/',
});

apiWithoutToken.interceptors.request.use();

/*RESPONSE */
apiWithoutToken.interceptors.response.use(response => {
  console.log(' api without token response is', response.status);
  return response;
});
export {apiWithoutToken};
