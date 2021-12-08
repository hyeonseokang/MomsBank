import styled from 'styled-components';
import Main from './components/main';
import Block from './components/main/Block';
import icon from './images/icon/transfer.svg'
function App() {
  return (
    <Wrap>
      <Block icon={icon} mainText="돈 옮기기" subText={"현재 쓰시고 계시는 현서 통장에서\n원하는 곳으로 돈을 옮길수 있습니다."}></Block>
      <Block icon={icon} mainText="Test" subText="Test"></Block>
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
