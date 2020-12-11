import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID oTOk7VPrLrTl9x9FtHPVpHD_rSyjiVxK9Yd-Sha3sCY'
    }
});