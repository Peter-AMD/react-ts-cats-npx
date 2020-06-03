import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.thecatapi.com/v1/',
  headers: {
    'x-api-key': '16b834be-c19a-4ca1-9196-16f58b091c67',
  },
});
