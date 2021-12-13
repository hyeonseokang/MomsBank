import styled from "styled-components";
import {useState} from 'react';

import PrevButton from "../PrevButton";
import Title from "../Title";
import BankSelect from "./BankSelect";
import MoneySelect from "../MoneySelect";
import BankInput from "../BankInput";
import Confirm from "./Confirm";
import { useDispatch } from 'react-redux';
import { addTransfer } from "../../modules/transfer";

const Transfer = ({history}) => {
    const dispatch = useDispatch();
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

    const createTransfer = () => {
        dispatch(addTransfer(transfer));
        history.push({
            pathname: '/success',
            state: {titleText: "돈 옮기기"}
        });
    };

    const getInputComponent = (id) =>{
        console.log(id);
        if (id === 0)
            return <BankSelect onClick={(value)=>{selectStep("sbank_name",value, id);}} />
        else if(id === 1)
            return <MoneySelect titleText={`현서의 (${transfer.sbank_name}) 계좌에서`} nextClick={(value)=>{selectStep("amount", value, id);}}/>
        else if(id === 2)
            return <BankInput nextClick={(data) => {selectBankInput(data, id);}}/>
        else if(id === 3)
            return <Confirm onClick={createTransfer} amount="100000" text={`원을\n현서의 ${transfer.sbank_name} 계좌에서\n\n ${transfer.name} ${transfer.bank_name}
            ${transfer.account_number} 으로 \n 옮길게요.`}/>
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