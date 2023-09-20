import axios from 'axios';

export const $host = axios.create({
  baseURL: 'https://www.epiu.am/wp-json/wp/v2/'
})