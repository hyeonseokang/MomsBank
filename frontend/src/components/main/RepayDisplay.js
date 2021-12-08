import React from 'react';
import styled from 'styled-components';
import MenuBlock from '../MenuBlock';
import Timer from '../../images/icon/timer.svg';

const RepayDisplay = () => {
    return (
        <MenuBlock  height = "150px">
            <TitleText>상환</TitleText>
            <Icon><img src={Timer}/></Icon>
            <InlineBlock>
                <MainText>남은 상환 기간까지</MainText>
                <SubText>2일 남음</SubText>
            </InlineBlock>
        </MenuBlock>
    )
};

const TitleText = styled.p`
    margin-top:34px;
    margin-left:24px;
    margin-bottom: 0px;
    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 0px;

    color: #2F69FF;
`;

const Icon = styled.div`
    display: inline-block;
    height: 116px;
    padding-top: 28px;
    >img{
        width: 60px;
        height: 60px;
    }
`;

const InlineBlock = styled.div`
    display: inline-block;
    height: 88px;
    width: 100px;

    margin-left: 8px;
`;

const MainText = styled.p`
    width: 266px;
    height: 30px;
    
    float:left;
    margin: 0 auto;
    margin-top:34px;
    margin-bottom: 0px;

    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 0px;
    color: #505791;
`;

const SubText = styled.p`
    width: 266px;
    height: 30px;

    float:left;
    margin: 0 auto;
    margin-top:5px;
    margin-bottom: 0px;

    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 0px;

    color: #2F69FF;
`;
export default RepayDisplay;