import axios from 'axios';

// axios custom instance: baseUrl and headers properties
// use: axios.get('/api/owner')
const instance = axios.create({
    //baseURL: 'http://localhost:5000',
    baseURL: 'https://brokerage.herokuapp.com',
    headers:{
        headerType: 'example header type'
    }
});

export default instance;