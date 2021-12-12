import React from 'react';
import styled from 'styled-components';

import titleIcon from '../images/icon/title.svg';

const Title = ({explan}) => {
    return (
        <Wrap>
          <TitleText>현서&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;은행</TitleText>
          <TitleIcon src={titleIcon}/>
          <SubText>{explan}</SubText>
        </Wrap>
    )
}

const Wrap = styled.div`
    width: 100%;
`;

const TitleText = styled.p`
  width: 100%;
  margin: auto;
  margin-top: 80px;

  font-family: Spoqa Han Sans Neo;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 0px;
  
  text-align: center;

  color: #2F69FF;
`;

const TitleIcon = styled.img`
  position: relative;

  width: 56px;
  height: 56px;
  top: -30px;
  left: 50%;
  margin-left: -28px;
  margin-top: 0px;
`;

const SubText = styled.div`
  width: 100%;
  margin-left: 0px;

  font-family: Spoqa Han Sans Neo;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 0px;

  color: #2F69FF;

  text-align: center;
`;

export default Title;