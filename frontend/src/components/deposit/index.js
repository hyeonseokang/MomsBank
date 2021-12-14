import styled from "styled-components";
import {useState} from 'react';

import PrevButton from "../PrevButton";
import Title from "../Title";
import MoneySelect from "../MoneySelect";
import BankInput from "../BankInput";
import {Confirm} from "./Confirm";
import DeadLineInput from "./DeadLineInput";
import { useDispatch } from 'react-redux';
import { addDeposit } from "../../modules/deposit";

const Deposit = ({history}) => {
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
    const [deposit, setDeposit] = useState({});
    const [inputId, setInputId] = useState(1);
    

    const selectStep = (name, value, id) => {
        setDeposit({
            ...deposit,
            [name]: value,
        });
        setInputId(id + 1);
        setPrevClick(()=>{
            setInputId(id);
            if (id === 1)
                setPrevClick(GoHome);
            else
                setPrevClick(()=>{setInputId(id - 1);})
        })
    }

    const selectBankInput = (data, id) => {
        setDeposit({
            ...deposit,
            ...data,
        });
        setInputId(id + 1);
        setPrevClick(()=>{
            setInputId(id);
            setPrevClick(()=>{setInputId(id - 1);})
        });
    };

    const createDeposit = () => {
        dispatch(addDeposit(deposit));
        history.push({
            pathname: '/success',
            state: {titleText: "대출"}
        });
    };

    const getInputComponent = (id) =>{
        if(id === 1)
            return <MoneySelect titleText={`현서에게`} subText="빌릴게요." nextClick={(value)=>{selectStep("amount", value, id);}}/>
        else if(id === 2)
            return <BankInput subText="은행 이름과 계좌번호는 필수 입니다." nextClick={(data) => {selectBankInput(data, id);}}/>
        else if(id == 3)
            return <DeadLineInput nextClick={(value)=>{selectStep("deadline", value, id);}} amount={deposit.amount}></DeadLineInput>
        else if(id === 4)
            return <Confirm onClick={createDeposit} amount={deposit.amount} text={`원을\n\n${deposit.name} ${deposit.bank_name}
            ${deposit.account_number}으로
            입금 할게요.\n\n`} deadline={deposit.deadline}/>
    }


    return (
        <div>
            <PrevButton onClick={prevClick.onClick}/>
            <Title explan={"대출"} />
            {getInputComponent(inputId)}
        </div>
    )
}

export default Deposit;