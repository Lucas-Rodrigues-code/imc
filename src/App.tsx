import { useState } from 'react';
import styled from 'styled-components';
import img from "./assests/powered.png";
import leftArro from "./assests/leftarrow.png"
import { levels, calculateImc, Level } from './helpers/imc';
import { GridItem } from "./components/GridItem"

function App() {
  const [heightInput, setHeightInput] = useState<number>(0)
  const [weightInput, setWeightInput] = useState<number>(0)
  const [showItem, setShowItem] = useState<Level | null>(null)

  function handleCalculate() {
    if (heightInput && weightInput) {
      setShowItem(calculateImc(heightInput, weightInput))
    } else {
      alert("Digite todos os campos.")
    }
  }

  function handBackButton() {
    setShowItem(null)
    setHeightInput(0)
    setWeightInput(0)
  }

  return (
    <Cont>
      <header>
        <div>
          <img src={img} alt="logo" width={150} />
        </div>
      </header>
      <ContMain>
        <div className='leftSide'>
          <h1>Calcule o seu IMC.</h1>
          <p>IMC é a sigla para índice de massa compórea, paramâmetro adotado pela Organização mundial de saúde para calcular o peso ideal de cada pessoa.</p>
          <input type="number" value={heightInput > 0 ? heightInput : ""} placeholder="Digite a sua altura. Ex: 1.5 (em métros)" onChange={e => setHeightInput(parseFloat(e.target.value))} disabled={showItem ? true : false} />
          <input type="number" value={weightInput > 0 ? weightInput : ""} placeholder="Digite o seu peso. Ex: 75.5 (em kg)" onChange={e => setWeightInput(parseFloat(e.target.value))} disabled={showItem ? true : false} />
          <button onClick={handleCalculate}>Calcular</button>
        </div>
        <div className='rigthSide'>
          {!showItem &&
            <div className='grid'>
              {levels.map((item, key) => (
                <GridItem key={key} item={item} />
              ))
              }
            </div>
          }
          {showItem &&
            <div className='rightBig'>
              <div className='rightArrow' onClick={handBackButton}>
                <img src={leftArro} alt="" />
              </div>
              <GridItem item={showItem} />
            </div>
          }
        </div>

      </ContMain>
    </Cont>
  );
}

export default App;

const Cont = styled.div`
  padding-bottom:50px;
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

      h1{
        margin:0;
        font-size:40px;
        color:#3a4b5b;
      }
      p{
        font-size:16px;
        margin-bottom:40px;
        color:#6a7d8b;
        margin-top:20px;
      }
      input{
        width:100%;
        border:0;
        border-bottom:2px solid rgba(150, 163, 171, .5);
        padding:10px 2px;
        margin-bottom:20px;
        font-size:14px;
        outline:0;
        :disabled{
          opacity:.5;
        }
      }
      button{
        background-color:#227c9d;
        color:#fff;
        font-size: 15px;
        border: 0;
        border-radius: 10px;
        width:100%;
        height:50px;
        cursor: pointer;
        margin-top:40px;
        transition: all ease .3s;
        :hover{
          opacity: .8;
        }
      }
       
    }
    .rigthSide{
      flex:1;
      margin-left:40px;
      display:flex;

      .grid{
        flex:1;
        display:grid;
        grid-template-columns: repeat(2,1fr);
        gap:20px;
      }
    }

    .rightBig{
      flex:1;
      display:flex;
    }
    .rightArrow{
      position:absolute;
      background-color:#227C9D;
      width:70px;
      border-radius: 50%;
      justify-content:center;
      align-items:center;
      cursor: pointer;
      margin-left:-35px;
      margin-top:145px;

      :hover{
        opacity:.8;
      }
    }

  @media(max-width: 770px){
    padding:0 20px;
    flex-direction:column;
    header{
      padding:0 20px;
    }
    .leftSide{
      margin-right:0;
    }
    .rigthSide{
      margin-left:0;
      margin-top:50px;
    }
    .rightArrow{
      margin-left:0;
      margin-top:0;
      border-radius:10px;
    }
  }

  @media(max-width: 430px){
    .rigthSide{
      .grid{
      grid-template-columns:1fr;
    }
    }
  }
`
