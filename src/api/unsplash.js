import axios from 'axios';

export default axios.create({
baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:
        'Client-ID 764a2f2e2c1fb31804103c17969043cc3548870a0acd4e046769e4c70279fd97'      
      }

});