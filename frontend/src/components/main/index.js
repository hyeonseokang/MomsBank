import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDeposits } from '../../modules/deposit';

import Title from '../Title'
import RepayDisplay from './RepayDisplay'
import MenuBlock from '../MenuBlock';
import Block from './Block';

import moneyIcon from '../../images/icon/check.svg';
import nextIcon from '../../images/icon/next.svg'
import getDepositDDay from '../../utils/DepositDate';

import transferIcon from '../../images/icon/transfer.svg';
import bankIcon from '../../images/icon/bank.svg';

const Main = ({history}) => {
  const dispatch = useDispatch();
  const {data} = useSelector(state => state.deposits);
  const [dDay, setDDay] = useState(getDepositDDay(data));
  const interval = useRef(null);

    useEffect(() => {
      dispatch(getDeposits());
    }, [dispatch]);

    useEffect(() => {
      interval.current = setInterval(() => {
        console.log("hi")
      }, 1000);
    }, [data]);

    useEffect(() => {
    }, []);

    const GoCheck = () => {
      history.push('/check');
    };
    return (
        <Div>
            <Title></Title>
            <MenuBlockDiv>
                <RepayDisplay dDay={dDay}/>
                <MenuBlock onClick={GoCheck} height = "68px">
                  <MoneyIcon>
                    <img src={moneyIcon}/>
                  </MoneyIcon>
                  <Text>조회</Text>
                  <NextIcon src={nextIcon}/>
                </MenuBlock>
                <MenuBlock height = "427px">
                  <ActivityText>
                    무엇을 하시겠습니까?
                  </ActivityText>
                  <Block icon={transferIcon} mainText={"돈 옮기기"} subText={"현재 쓰시고 계시는 현서 통장에서\n원하는 곳으로 돈을 옮길수 있습니다."}/>
                  <Block icon={bankIcon} mainText={"입금 요청"} subText={"돈을 빌립니다.\n기한내에 돈을 갚아야 합니다."}/>
                </MenuBlock>
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

const MoneyIcon = styled.div`
  display: inline-block;
  >img{
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 15px;
    width: 48px;
    height: 48px;
  }
`;

const NextIcon = styled.img`
  position: absolute;
  width: 48px;
  height: 48px;
  left: 312px;
  top: 10px;
`;

const Text = styled.div`
  display:inline-block;
  width:63px;
  height: 72px;

  margin-top:21px;
  margin-left: 93px;
  
  vertical-align: top;
  font-family: Spoqa Han Sans Neo;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;

  color: #2F69FF;
`;

const ActivityText = styled.div`
  margin-top: 37px;
  margin-bottom: 46px;
  margin-left: 45px;
  width: 271px;

  font-family: Spoqa Han Sans Neo;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 0px;

  display: flex;
  align-items: center;
  text-align: center;

  color: #2F69FF;

`;
export default Main;