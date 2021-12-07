import React from 'react';
import styled from 'styled-components';
import MenuBlock from '../MenuBlock';

const RepayDisplay = () => {
    return (
        <>
            <MenuBlock  height = "150px">
                <TitleText>상환</TitleText>
            </MenuBlock>
        </>
    )
};

const TitleText = styled.p`
    position: absolute;
    width: 37px;
    height: 0px;
    left: 20px;
    top: 34px;
    margin:0 auto;

    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 0px;
    /* identical to box height, or 0% */

    display: flex;
    align-items: center;

    color: #2F69FF;
`;
export default RepayDisplay;