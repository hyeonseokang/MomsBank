import { combineReducers } from 'redux';
import { all } from '@redux-saga/core/effects';
import transfers, {transfersSaga} from './transfer';
import deposits, {depositsSaga} from './deposit'

const rootReducer = combineReducers({transfers, deposits});
export function* rootSaga() {
    yield all([transfersSaga(), depositsSaga()]);
}

export default rootReducer;