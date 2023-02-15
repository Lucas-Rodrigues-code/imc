import { Level } from "../helpers/imc"
import upImg from "../assests/up.png"
import downImg from "../assests/down.png";
import styled from "styled-components";

type Props = {
    item: Level
}

export function GridItem({ item }: Props) {
    return (
        <Cont style={{ backgroundColor: item.color }}>
            <div className="gridIcon">
                <img src={item.icon === "up" ? upImg : downImg} alt="" width={30} />
            </div>
            <div className="gridTitle">{item.title}</div>
            {item.yourImc &&
                <div className="yourImc">Seu IMC é de {item.yourImc} kg/m2</div>
            }
            <div className="gridInfo">
                IMC esta entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
            </div>
        </Cont>
    )
}

const Cont = styled.div`
    flex:1;
    color:#fff;
    border-radius:10px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    padding:20px;

    .gridIcon{
        width:70px;
        height:70px;
        border-radius:50%;
        background-color:rgba(0,0,0,.1);
        display:flex;
        justify-content:center;
        align-items:center;
    }

    .gridTitle{
        font-size:23px;
        font-weight:bold;
        margin-top:5px;
    }
    .gridInfo{
        font-size:12px;
        margin-top:14px;
    }
    .yourImc{
        font-size:17px;
        margin:10px 0 50px 0;
    }

`