import styled from 'styled-components';
import Main from './components/main';
import Block from './components/main/Block';
import icon from './images/icon/transfer.svg'
function App() {
  return (
    <Wrap>
      <Block icon={icon} mainText="Test" subText="Test2"></Block>
    </Wrap>
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
  height: 120px;
  background-color: white;
  border: 1px solid #0000ff;
`;

const Wrap = styled.div`
  width: 380px;
  height: 844px;
  margin: 0 auto;
  box-shadow: 0 1px 10px rgb(0 0 0 / 20%);
  overflow: hidden;
`;

export default App;
