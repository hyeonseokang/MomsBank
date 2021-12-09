import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDeposits } from '../../modules/deposit';

import Title from '../Title'
import RepayDisplay from './RepayDisplay'
import MenuBlock from '../MenuBlock';

import moneyIcon from '../../images/icon/check.svg';
import nextIcon from '../../images/icon/next.svg'
import getDepositDDay from '../../utils/DepositDate';

const Main = () => {
  const dispatch = useDispatch();
  const {data} = useSelector(state => state.deposits);
  const [dDay, setDDay] = useState(getDepositDDay(data));
  const interval = useRef(null);

    useEffect(() => {
      dispatch(getDeposits());
    }, [dispatch]);

    useEffect(() => {
      setDDay(getDepositDDay(data));
    }, [data]);

    useEffect(() => {
      interval.current = setInterval(() => {
        dispatch(getDeposits());
      }, 1000);
      return () => clearInterval(interval.current);
    }, []);

    return (
        <Div>
            <Title></Title>
            <MenuBlockDiv>
                <RepayDisplay dDay={dDay}/>
                <MenuBlock height = "68px">
                  <MoneyIcon>
                    <img src={moneyIcon}/>
                  </MoneyIcon>
                  <Text>조회</Text>
                  <NextIcon src={nextIcon}/>
                </MenuBlock>
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
  width: 48px;
  height: 48px;
  float: right;
  margin:auto;
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

export default Main;