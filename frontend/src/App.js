import styled from 'styled-components';
import Main from './components/main';
import rootReducer, {rootSaga} from './modules';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware}from 'redux';

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleWare)
);

sagaMiddleWare.run(rootSaga);
function App() {
  return (
    <Provider store = {store}>
  <Wrap>
        <Main/>
      </Wrap>
    </Provider>
  );
}

const Test = styled.div`
  display: inline-block;
  width: 100px;
  height: 100px;
  background-color: white;
  border: 1px solid #0000ff;
`;

const Test2 = styled.div`
  display: inline-block;
  width: 100px;
  height: 100px;
  background-color: white;
  border: 1px solid #0000ff;
  >p{
    float: top;
    margin-left: 20px;
  }
`;

const Wrap = styled.div`
  width: 380px;
  height: 844px;
  margin: 0 auto;
  box-shadow: 0 1px 10px rgb(0 0 0 / 20%);
  overflow: hidden;
`;

export default App;
