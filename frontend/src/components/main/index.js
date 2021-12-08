import React from 'react';
import styled from 'styled-components';

import Title from '../Title'
import RepayDisplay from './RepayDisplay'
import MenuBlock from '../MenuBlock';

import {useSelector, useDispatch} from 'react-redux';
import {getTransfers, addTransfer} from '../../modules/transfer';
import { useEffect } from 'react';
import { addDeposit, getDeposits } from '../../modules/deposit';

const Main = () => {
    
  const {data, loading, error} = useSelector(state => state.deposits);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDeposits());
  }, [dispatch]);

  if (loading == true){
    console.log(data);
  }

    return (
        <Div onClick = {
          () => {
            dispatch(addDeposit({
              "name": "김철수",
              "bank_name": "케이뱅크",
              "account_number": "123412343333",
              "amount": 1111,
              "deadline": "2021-12-15"
            }));
          }
        }>
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