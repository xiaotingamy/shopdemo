import axios from 'axios';

// axios.defaults.headers.post['Content-Type'] = 'application/json'

export default {
  getSeller () {
    return axios.get('/api/seller');
  },
  getGoods () {
    return axios.get('/api/goods');
  },
  getRatings () {
    return axios.get('/api/ratings');
  }
};
