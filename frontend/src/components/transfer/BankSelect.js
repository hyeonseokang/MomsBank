import styled from 'styled-components';
import MenuBlock from '../MenuBlock';
import BankButton from './BankButton';

import nhIcon from '../../images/icon/nh.svg';
import shIcon from '../../images/icon/sh.svg';

const BankSelect = ({onClick}) => {
    return (
        <div>
            <Title>{"돈을 인출할 은행을\n선택 해주세요"}</Title>
            <MenuBlock height={"427px"}>
                <BankButton icon={nhIcon} text={"농협 은행"} onClick={onClick}/>
                <BankButton icon={shIcon} text={"신한 은행"} onClick={onClick}/>
            </MenuBlock>
        </div>
    )
}

const Title = styled.div`
    width: 235px;
    height: 70px;

    margin:0 auto;
    margin-top: 81px;
    margin-bottom: 16px;

    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 35px;

    text-align: center;

    color: #2F69FF;
`;



export default BankSelect;