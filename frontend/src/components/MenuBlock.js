import React from 'react';
import styled from 'styled-components';

const MenuBlock = ({children}) => {
    return (
        <Div>
            {children}
        </Div>
    )
}

const Div = styled.div`
    position: relative;
    width: 360px;
    height: 150px;

    background: #F0F0F0;
    border: 0.1px solid #2F69FF;
    box-sizing: border-box;
    border-radius: 20px;
`;

export default MenuBlock;