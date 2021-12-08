import React from 'react';
import styled from 'styled-components';

import Title from '../Title'
import RepayDisplay from './RepayDisplay'
import MenuBlock from '../MenuBlock';

import {useSelector, useDispatch} from 'react-redux';
import {getTransfers} from '../../modules/transfer';
import { useEffect } from 'react';
const Main = () => {
    
  const {data, loading, error} = useSelector(state => state.transfers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransfers());
  }, [dispatch]);

  if (loading == true){
    console.log(data);
  }

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