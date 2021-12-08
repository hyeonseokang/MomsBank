import React from 'react';
import styled from 'styled-components';

import Title from '../Title'
import RepayDisplay from './RepayDisplay'
import MenuBlock from '../MenuBlock';

const Main = () => {
    return (
        <Div>
            <Title></Title>
            <MenuBlockDiv>
                <RepayDisplay/>
                <MenuBlock height = "68px"/>
                <MenuBlock height = "427px"/>
            </MenuBlockDiv>
        </Div>
    )
};

const Div = styled.div`
`;

const MenuBlockDiv = styled.div`
    >div{
        margin-bottom: 8px;
    }
`;

export default Main;