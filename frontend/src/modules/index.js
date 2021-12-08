import { combineReducers } from 'redux';
import { all } from '@redux-saga/core/effects';
import transfers, {transfersSaga} from './transfer';

const rootReducer = combineReducers({transfers});
export function* rootSaga() {
    yield all([transfersSaga()]);
}

export default rootReducer;