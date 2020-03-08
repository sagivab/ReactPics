import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID xQBesxIwc5-KAnwx4MavrUGKtlZQBwOLRYRoYK737mY'
   }
});