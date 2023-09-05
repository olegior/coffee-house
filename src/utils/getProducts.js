import axios from 'axios';

const getProducts = async (parametrs) => {
    let request = Object.entries(parametrs)
        .map(([key, value]) => {
            if (!value)
                return '';
            if (key === 'filters')
                return value;
            return `${key}=${value}`
        }).filter(Boolean).join('&');

    while (request[request.length - 1] === '&') {
        request = request.slice(0, request.length - 1);
    }

    const response = await axios
        .get(`https://coffee-house-server.vercel.app/products/?${request}`);
    // console.log(response);
    return response
}

export default getProducts;