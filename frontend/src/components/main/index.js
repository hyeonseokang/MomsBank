import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDeposits } from '../../modules/deposit';

import Title from '../Title'
import RepayDisplay from './RepayDisplay'
import MenuBlock from '../MenuBlock';

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