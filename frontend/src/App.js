import styled from 'styled-components';
import Block from './components/main/Block';
import icon from './images/icon/transfer.svg';

import MenuBlock from './components/MenuBlock';
function App() {
  return (
    <Wrap>
      <Block icon={icon} mainText='Test' subText={"Teste \n TTT"}></Block>
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

const Title = styled.p`
  width: 390px;
  height: 115px;

  font-family: Spoqa Han Sans Neo;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 0px;
  
  text-align: center;

  color: #2F69FF;
`;

export default App;
