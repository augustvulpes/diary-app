import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://diary-app-cb024.firebaseio.com/'
});

export default instance;