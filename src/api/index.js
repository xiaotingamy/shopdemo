import axios from 'axios';

// axios.defaults.headers.post['Content-Type'] = 'application/json'

export default {
  getSeller (data) {
    return axios.get('/api/seller', {
      params: data
    });
  },
  getGoods () {
    return axios.get('/api/goods');
  },
  getRatings () {
    return axios.get('/api/ratings');
  }
};
