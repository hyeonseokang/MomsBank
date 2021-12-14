import {call, put, takeEvery} from 'redux-saga/effects';
import {getDepositsAPI, addDepositAPI} from '../api/api.js'

const GET_DEPOSITS = 'GET_DEPOSITS';
const GET_DEPOSITS_SUCCESS = 'GET_DEPOSITS_SUCCESS';
const GET_DEPOSITS_ERROR = 'GET_DEPOSITS_ERROR';

const ADD_DEPOSIT = 'ADD_DEPOSIT';
const ADD_DEPOSIT_SUCCESS = 'ADD_DEPOSIT_SUCCESS'

export const getDeposits = () => ({type: GET_DEPOSITS});
export const addDeposit = (params) => ({
    ...params,
    type: ADD_DEPOSIT
})

function* getDepositsSaga() {
    try{
        const deposits = yield call(getDepositsAPI);
        yield put({
            type:GET_DEPOSITS_SUCCESS,
            payload: deposits
        });
    } catch (e) {
        yield put({
            type: GET_DEPOSITS_ERROR,
            payload: e
        })
    }
}

function* addDepositSaga(params) {
    try {
        const status = yield call(addDepositAPI, params);
        yield put({
            type: ADD_DEPOSIT_SUCCESS,
        });
    } catch (e) {
    }

}

export function* depositsSaga() {
    yield takeEvery(GET_DEPOSITS, getDepositsSaga);
    yield takeEvery(ADD_DEPOSIT, addDepositSaga);
}

const initialState = {
    data: [],
    loading: false,
    error: null,
}

export default function deposits(state = initialState, action) {
    switch(action.type) {
        case GET_DEPOSITS:
            return {
                ...state,
                loading: false,
            }
        case GET_DEPOSITS_SUCCESS:
            return {
                ...state,
                loading: true,
                data: action.payload,
            }
        case GET_DEPOSITS_ERROR:
            return {
                ...state,
                loading: true,
                error: action.error,
            }
        default:
            return state;
    }
}