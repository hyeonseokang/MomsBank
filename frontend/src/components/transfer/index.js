import styled from "styled-components";
import {useState} from 'react';

import PrevButton from "../PrevButton";
import Title from "../Title";
import BankSelect from "./BankSelect";

const Transfer = ({history}) => {
    const GoHome = () => {
        history.push('/');
    };

    const [prevClick, _setPrevClick] = useState({
        onClick:GoHome,
    });
    const setPrevClick = (onClick) =>{
        _setPrevClick({
            onClick: onClick,
        });
    }
    const [transfer, setTransfer] = useState({});
    const [inputId, setInputId] = useState(0);
    const selectBank = (bank_name) => {
        setTransfer({
            ...transfer,
            bank_name: bank_name,
        })
        setInputId(2);
        setPrevClick({
            onClick: () =>{ setInputId(0);}
        });
        setPrevClick(()=>{
            setInputId(0);
            setPrevClick(GoHome);
        })
    }

    const getInputComponent = (id) =>{
        if (id === 0)
            return <BankSelect onClick={selectBank} />
    }


    return (
        <div>
            <PrevButton onClick={prevClick.onClick}/>
            <Title explan={"돈 옮기기"} />
            {getInputComponent(inputId)}
        </div>
    )
}

export default Transfer;