import styled from 'styled-components';
import Block from './components/main/Block';
import icon from './images/icon/transfer.svg';
function App() {
  return (
    <Wrap>
            <div>
              <Block icon={icon} mainText="돈 옮기기" subText="현재 쓰시고 계시는 현서 통장에서
    원하는 곳으로 돈을 옮길수 있습니다.">

          </Block><Block icon={icon} mainText="돈 옮기기" subText="현재 쓰시고 계시는 현서 통장에서
    원하는 곳으로 돈을 옮길수 있습니22  다.">

          </Block>
            </div>
  
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

const Background = styled.div`
  background: transparent;
  position: relative;
  width: 100%;
  height: 812px;
`;

export default App;
