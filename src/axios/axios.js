import axios from 'axios'

const instance = axios.create({ 
    baseURL: 'http://192.168.29.9:5000/'
})

const token = localStorage.getItem('token');
// console.log(token)

instance.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

if(token) {
    instance.defaults.headers.common['Authorization'] = token
}

export default instance;

