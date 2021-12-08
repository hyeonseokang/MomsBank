import {call, put, takeEvery} from 'redux-saga/effects';
import {getTransfersAPI} from '../api/transferapi.js'

const GET_TRANSFERS = 'GET_TRANSFERS';
const GET_TRANSFERS_SUCCESS = 'GET_TRANSFERS_SUCCESS';
const GET_TRANSFERS_ERROR = 'GET_TRANSFERS_ERROR';

export const getTransfers = () => ({type: GET_TRANSFERS});

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

export function* transfersSaga() {
    yield takeEvery(GET_TRANSFERS, getTransfersSaga);
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