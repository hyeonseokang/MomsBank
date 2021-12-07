import React from 'react';
import styled from 'styled-components';

import titleIcon from '../images/icon/title.svg';

const Title = () => {
    return (
        <Wrap>
            <TitleText>현서&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;은행</TitleText>
            <TitleIcon src={titleIcon}/>
        </Wrap>
    )
}

const Wrap = styled.div`
    position: absolute;
    top: 0px;
    width: 100%;
    height: 107px;
`;

const TitleText = styled.p`
  width: 390px;
  height: 115px;
  margin: auto;
  margin-top: 59px;

  font-family: Spoqa Han Sans Neo;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 0px;
  
  text-align: center;

  color: #2F69FF;
`;

const TitleIcon = styled.img`
  position: absolute;

  width: 56px;
  height: 56px;
  top: 25px;
  left: 50%;
  margin-left: -28px;
  margin-top: 0px;
`;

export default Title;