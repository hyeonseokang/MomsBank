import styled from "styled-components";
import {useState} from 'react';

import PrevButton from "../PrevButton";
import Title from "../Title";
import BankSelect from "./BankSelect";
import MoneySelect from "../MoneySelect";
import BankInput from "../BankInput";

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
    

    const selectStep = (name, value, id) => {
        setTransfer({
            ...transfer,
            [name]: value,
        });
        setInputId(id + 1);
        setPrevClick(()=>{
            setInputId(id);
            if (id === 0)
                setPrevClick(GoHome);
            else
                setPrevClick(()=>{setInputId(id - 1);})
        })
    }

    const selectBankInput = (data, id) => {
        setTransfer({
            ...transfer,
            ...data,
        });
        setInputId(id + 1);
        setPrevClick(()=>{
            setInputId(id);
            setPrevClick(()=>{setInputId(id - 1);})
        });
    };

    const getInputComponent = (id) =>{
        console.log(id);
        if (id === 0)
            return <BankSelect onClick={(value)=>{selectStep("bank_name",value, id);}} />
        else if(id === 1)
            return <MoneySelect titleText={`현서의 (${transfer.bank_name}) 계좌에서`} nextClick={(value)=>{selectStep("amount", value, id);}}/>
        else if(id === 2)
            return <BankInput nextClick={(data) => {selectBankInput(data, id);}}/>
        console.log(id);
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