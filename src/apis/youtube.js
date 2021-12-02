import axios from 'axios';

const KEY = 'AIzaSyDKVpNSQK84hGb5EV_EVSAtOeJgj02X_c0';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});