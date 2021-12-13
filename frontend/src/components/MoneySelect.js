import styled from "styled-components";
import {useState} from 'react';

import MenuBlock from './MenuBlock';
import NextButton from "./NextButton";

const MoneySelect = ({titleText, nextClick}) =>{
    const [money, setMoney] = useState('');
    const onChange = (e) => {
        setMoney(e.target.value);
    };

    const onClick = () => {
        nextClick(money);
    };

    return (
        <div>
            <TitleText>{titleText}</TitleText>
            <SubText>{money===''?0:money} 원을 출금 할게요.</SubText>
            <MenuBlock height="106px">
                <InputMoney>돈</InputMoney>
                <MoneyInput type="number" onChange={onChange} autoFocus placeholder={"필수로 입력"}></MoneyInput>
            </MenuBlock>
            <NextButton mt="320px" text="다음" onClick={onClick}/>
        </div>
    )
};

const TitleText = styled.div`
    width: 247px;
    height: 35px;

    margin-top: 83px;
    margin-bottom: 0px;
    margin-left: 20px;

    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    line-height: 35px;

    color: #2F69FF;
`;

const SubText = styled.div`
    width: 247px;
    height: 35px;

    margin-top: 1px;
    margin-bottom: 20px;
    margin-left: 20px;

    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 35px;

    color: #112364;
`;

const InputMoney = styled.div`
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

const MoneyInput = styled.input`
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

export default MoneySelect;