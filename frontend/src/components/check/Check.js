import react from 'react';
import styled from 'styled-components'
import Title from '../Title';

const Check = ({history}) => {
    const GoHome = () => {
        history.goBack();
    }

    return (
        <div>
            <PrevText onClick={GoHome}>이전</PrevText>
            <Title explan="조회"/>
        </div>
    )
};

const PrevText = styled.div`
    position: relative;
    width: 266px;
    height: 30px;
    left: 15px;
    top: 9px;

    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 0px;
    /* or 0% */

    display: flex;
    align-items: center;

    color: #505791;
`;
export default Check;