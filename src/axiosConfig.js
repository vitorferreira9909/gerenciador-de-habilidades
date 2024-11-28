import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://6738a9b34eb22e24fca89864.mockapi.io/api',
});

export default instance;