import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://minida-cccbf.firebaseio.com'
});

export default instance;