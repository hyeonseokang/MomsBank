import React from 'react';
import styled from 'styled-components';

const MenuBlock = ({children, height, onClick}) => {
    return (
        <Div onClick={onClick} height = {height}>
            {children}
        </Div>
    )
}

const Div = styled.div`
    position: relative;
    width: 360px;
    height: ${props=>props.height};

    background: #F0F0F0;
    border: 0.1px solid #2F69FF;
    box-sizing: border-box;
    border-radius: 20px;

    margin: auto;
`;

export default MenuBlock;