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

export async function addTransferAPI({name, bank_name, account_number, amount, sbank_name}) {
    try {
        const response = await baseService.post('/transfer/add', {
            name: name,
            bank_name: bank_name,
            account_number: account_number,
            amount:amount,
            sbank_name:sbank_name,
        });
        return response.status;
    } catch(e) {
        console.log(e);
        return e;
    }
}