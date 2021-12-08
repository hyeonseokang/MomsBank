import styled from 'styled-components';
import Main from './components/main';

function App() {
  return (
      <Wrap>
        <Main/>
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
