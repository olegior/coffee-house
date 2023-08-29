import axios from 'axios';

const getProducts = async (parametrs) => {
    let request = Object.entries(parametrs)
        .map(([key, value]) => {
            if (!value)
                return '';
            return `${key}=${value}`
        })
        .join('&');
    // console.log(request);
    while (request[request.length - 1] === '&') {
        request = request.slice(0, request.length - 1)
    }
    // console.log(request);

    const response = await axios
        .get(`https://coffee-house-server.vercel.app/products/?${request}`);
    // console.log(response);
    return response
}

export default getProducts;