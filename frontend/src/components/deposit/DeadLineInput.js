import styled from "styled-components";
import {useState} from 'react';

import MenuBlock from '../MenuBlock';
import NextButton from "../NextButton";

import {getDateString} from '../../utils/DepositDate';

const DeadLineInput = ({amount, nextClick}) => {
    const [deadline, setDeadLine] = useState("222");

    const onChangeDate = (e) => {
        const date = getDateString(e.target.value);
        setDeadLine(date);
    }

    const onClick = () => {
        nextClick(deadline);
    };
    return (
        <div>
            <TitleText>{deadline} 까지</TitleText>
            <SubText>{`${amount}원을 상환 할게요.`}</SubText>
            <MenuBlock height="106px">
                <InputText>날짜</InputText>
                <Input type="date" onChange={onChangeDate} autoFocus></Input>
            </MenuBlock>    
            <NextButton onClick={onClick} text = "다음" mt = "320px" />      
        </div>
    )
}

const TitleText = styled.div`
    width: 300px;
    height: 35px;

    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    line-height: 35px;

    color: #2F69FF;

    margin-left: 20px;
    margin-top: 83px;
    margin-bottom: 0px;
`;

const SubText = styled.div`
    width: 300px;
    height: 35px;

    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 35px;

    margin-left: 20px;
    margin-top: 1px;
    margin-bottom: 10px;

    color: #112364;
`;

const InputText = styled.div`
    margin-top: 9px;
    margin-left: 21px;

    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    line-height: 35px;

    display: flex;
    align-items: center;

    color: #2F69FF;
`;

const Input = styled.input`
    margin-left: 14px;
    border: 0px;
    border-bottom: 1px solid #112364;
    margin-top: 10px;

    background-color: transparent;

    width:300px;
    height: 30px;

    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 35px;

    &:focus{
        outline: none;
    }
`;
export default DeadLineInput;