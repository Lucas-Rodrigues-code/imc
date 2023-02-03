import styled from 'styled-components';
import img from "./assests/powered.png"

function App() {
  return (
    <Cont>
      <header>
        <div>
          <img src={img} alt="logo" width={150} />
        </div>
      </header>
      <ContMain>
        <div className='leftSide'>
          ...
        </div>
        <div className='rigthSide'>
          ...
        </div>

      </ContMain>
    </Cont>
  );
}

export default App;

const Cont = styled.div`
  header{
    max-width:900px;
    margin:40px auto;
  }

`

const ContMain = styled.div`
    display:flex;
    max-width:900px;
    margin:auto;
    

    .leftSide{
      flex:1;
      margin-right:40px;
    }
    .rigthSide{
      flex:1;
      margin-left:40px;
    }

`
