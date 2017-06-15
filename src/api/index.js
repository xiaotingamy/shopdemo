import axios from 'axios'

// axios.defaults.headers.post['Content-Type'] = 'application/json'

export default {
  getSeller () {
    return axios.get('/api/seller')
  }
}
