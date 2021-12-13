import styled from 'styled-components';
import Main from './components/main';
import Check from './components/check/Check';
import Transfer from './components/transfer';
import Success from './components/success';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
      <Wrap>
          <Route path="/" exact={true} component={Main} />
          <Route path="/check" component = {Check} />
          <Route path="/transfer" component = {Transfer} />
          <Route path="/success" component={Success} />
      </Wrap>
  );
}

const Wrap = styled.div`
  width: 390px;
  height: 844px;
  margin: 0 auto;
  box-shadow: 0 1px 10px rgb(0 0 0 / 20%);
  overflow: hidden;
`;

export default App;
