import {call, put, takeEvery} from 'redux-saga/effects';
import {getTransfersAPI, addTransferAPI} from '../api/api.js'

const GET_TRANSFERS = 'GET_TRANSFERS';
const GET_TRANSFERS_SUCCESS = 'GET_TRANSFERS_SUCCESS';
const GET_TRANSFERS_ERROR = 'GET_TRANSFERS_ERROR';

const ADD_TRANSFER = 'ADD_TRANSER';
const ADD_TRANSFER_SUCCESS = 'ADD_TRANSFER_SUCCESS'

export const getTransfers = () => ({type: GET_TRANSFERS});
export const addTransfer = (params) => ({
    ...params,
    type: ADD_TRANSFER})

function* getTransfersSaga() {
    try{
        const transfers = yield call(getTransfersAPI);
        yield put({
            type:GET_TRANSFERS_SUCCESS,
            payload: transfers
        });
    } catch (e) {
        yield put({
            type: GET_TRANSFERS_ERROR,
            payload: e
        })
    }
}

function* addTransferSaga({name, bank_name, account_number, amount, sbank_name}) {
    try {
        const status = yield call(addTransferAPI, {name, bank_name, account_number, amount, sbank_name});
        yield put({
            type: ADD_TRANSFER_SUCCESS,
        });
    } catch (e) {
    }

}

export function* transfersSaga() {
    yield takeEvery(GET_TRANSFERS, getTransfersSaga);
    yield takeEvery(ADD_TRANSFER, addTransferSaga);
}

const initialState = {
    data: [],
    loading: false,
    error: null,
}

export default function transfers(state = initialState, action) {
    switch(action.type) {
        case GET_TRANSFERS:
            return {
                ...state,
                loading: false,
            }
        case GET_TRANSFERS_SUCCESS:
            return {
                ...state,
                loading: true,
                data: action.payload,
            }
        case GET_TRANSFERS_ERROR:
            return {
                ...state,
                loading: true,
                error: action.error,
            }
        default:
            return state;
    }
}