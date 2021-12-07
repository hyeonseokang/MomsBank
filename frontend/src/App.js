import styled from 'styled-components';
import Title from './components/Title';
import Block from './components/main/Block';
import icon from './images/icon/transfer.svg';

import MenuBlock from './components/MenuBlock';
function App() {
  return (
    <Wrap>
      <Title></Title>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 380px;
  height: 844px;
  margin: 0 auto;
  box-shadow: 0 1px 10px rgb(0 0 0 / 20%);
  overflow: hidden;
`;

export default App;
