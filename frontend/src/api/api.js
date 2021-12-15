import axios from 'axios';

const development = 'http://localhost:80';
const production = 'http://momsbank.co.kr:80';

const baseURL = production;
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

export async function getDepositsAPI() {
    try {
        const response = await baseService.get('/getall/deposit');
        return response.data;
    } catch(e) {
        console.log(e);
    }
}


export async function addTransferAPI(params) {
    try {
        const response = await baseService.post('/transfer/add', params);
        return response.status;
    } catch(e) {
        console.log(e);
        return e;
    }
}

export async function addDepositAPI(params) {
    try {
        const response = await baseService.post('/deposit/add', params);
        return response.status;
    } catch(e) {
        console.log(e);
        return e;
    }
}