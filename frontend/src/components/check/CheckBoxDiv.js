import styled from "styled-components";

import {getDepositDDay, getDateString} from '../../utils/DepositDate';
const CheckBoxDiv = ({deposit}) => {
    return (
        <Div>
            <TitleText>{getDateString(deposit.createdAt)} 빌린 {deposit.amount}</TitleText>
            <SubText>{getDateString(deposit.deadline)}까지 {getDepositDDay(deposit)} 남았습니다.</SubText>
        </Div>
    )
};

const Div = styled.div`
    width: 360px;
    height: 106px;
    background: #F0F0F0;
    border: 0.1px solid #2F69FF;
    box-sizing: border-box;
    border-radius: 20px;

    margin: auto;
    margin-bottom: 19px;
`;

const TitleText = styled.div`
    position: relative;
    left: 2.78%;
    right: 12.5%;
    top: 8.49%;
    bottom: 58.49%;

    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 35px;

    display: flex;
    align-items: center;

    color: #2F69FF;

    margin-bottom: 0px;
`;

const SubText = styled.div`
    position: relative;
    left: 2.78%;
    right: 4.44%;
    top: 10px;

    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 25px;


    color: #494F65;
    margin-top: 0px;
`;

 export default CheckBoxDiv