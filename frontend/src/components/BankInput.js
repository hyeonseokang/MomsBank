import styled from "styled-components";
import {useState} from 'react';

import MenuBlock from './MenuBlock';
import NextButton from "./NextButton";

const BankInput = ({nextClick, subText}) =>{
    const [bankName, setBankName] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [name, setName] = useState('');
    const onChangeBank = (e) => {
        setBankName(e.target.value);
    };
    const onChangeAN = (e) => {
        setAccountNumber(e.target.value);
    };
    const onChangeName = (e) => {
        setName(e.target.value);
    };

    const onClick = () => {
        nextClick({
            bank_name: bankName,
            account_number: accountNumber,
            name: name,
        });
    };

    return (
        <div>
            <TitleText>돈을 받을 계좌를 적어주세요.</TitleText>
            <SubText>{subText}</SubText>
            <MenuBlockDiv>
                <MenuBlock height="106px">
                    <InputText>은행 이름</InputText>
                    <Input type="text" onChange={onChangeBank} autoFocus placeholder={"예) 농협은행"}></Input>
                </MenuBlock>
                <MenuBlock height="106px">
                    <InputText>계좌 번호</InputText>
                    <Input type="text" onChange={onChangeAN} autoFocus placeholder={"예) 123-1234123-123"}></Input>
                </MenuBlock>
                <MenuBlock height="106px">
                    <InputText>예금주</InputText>
                    <Input type="text" onChange={onChangeName} autoFocus placeholder={"예) 강현서"}></Input>
                </MenuBlock>
            </MenuBlockDiv>
            <NextButton mt="68px" text="다음" onClick={onClick}/>
        </div>
    )
};

const TitleText = styled.div`
    width: 350px;
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
    width: 350px;
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

const MenuBlockDiv = styled.div`
  >div{
      margin-bottom: 20px;
  }
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

export default BankInput;