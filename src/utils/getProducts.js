import axios from 'axios';

const getProducts = async (parametrs) => {
    const request = Object.entries(parametrs)
        .map(([key, value]) => `${key}=${value}`)
        .join('&');
    const response = await axios
        .get(`https://coffee-house-server.vercel.app/products/?${request}`);
    // console.log(response);
    return response.data;
}

export default getProducts;