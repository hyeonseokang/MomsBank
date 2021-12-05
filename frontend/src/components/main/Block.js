import React from "react";
import styled from "styled-components";

const Block = ({icon, mainText, subText}) => {
    return (
            <Div>
                <Icon icon={icon}/>
                <MainText>{mainText}</MainText>
                <SubText>{subText}</SubText>
            </Div>
    )
};


const Div = styled.div`
    position: relative;
    display: inline-block;
    width: 343px;
    height: 116px;

    margin-bottom: 50px;

    background: #DBDBDB;
    border: 1px solid #2F69FF;
    box-sizing: border-box;
    border-radius: 10px;
`;

const Icon = styled.div`
    position: absolute;
    left: 3.89%;
    right: 80.56%;
    top: 25.86%;
    bottom: 24.71%;

    background: url(${props=>props.icon}) no-repeat;
`;

const MainText = styled.p`
   position: absolute;
    left: 21.28%;
    right: 38.78%;
    top: 13.79%;
    bottom: 61.21%;

    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 0px;
    /* or 0% */

    display: flex;
    align-items: center;

    color: #7098FF;
`;

const SubText = styled.p`
    position: absolute;
    left: 21.28%;
    right: 5.54%;
    top: 38.79%;
    bottom: 9.48%;

    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 20px;
    /* or 133% */

    display: flex;
    align-items: center;

    color: #112364;

`;

export default Block;