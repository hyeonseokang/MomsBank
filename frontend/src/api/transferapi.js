import axios from 'axios';

const baseURL = new URL('http://localhost:8000');
const baseService = axios.create({
    baseURL: baseURL.toString(),
    'Content-Type': 'application/json',
});

export async function getTransfersAPI() {
    try {
        const response = await baseService.get('/getall/transfer');
        return response.data;
    } catch(e) {
        console.log(e);
    }
}