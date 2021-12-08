import React from "react";
import styled from "styled-components";

const Block = ({icon, mainText, subText}) => {
    return (
            <Div>
                <Icon>
                    <img src={icon}/>
                </Icon>
                <InlineBlock>
                    <MainText>{mainText}</MainText>
                    <SubText>{subText}</SubText>
                </InlineBlock>
            </Div>
    )
};


const Div = styled.div`
    position: relative;
    width: 343px;
    height: 116px;

    background: #DBDBDB;
    border: 1px solid #2F69FF;
    box-sizing: border-box;
    border-radius: 10px;
`;

const Icon = styled.div`
    display: inline-block;
    width: 64px;
    height: 116px;
    margin-left: 0px;
    >img{
        position: absolute;
        top:26px;
        width: 64px;
        height: 64px;
    }
`;

const InlineBlock = styled.div`
    display: inline-block;
    width: 80px;
    height:116px;
`;

const MainText = styled.div`
    height: 29px;
    width: 137px;
    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 0px;
    float: left;
    margin-top: 30px;

    color: #2F69FF;
`;

const SubText = styled.p`
    width: 225px;
    height: 40px;

    float: left;
    margin-top: 0px;

    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 20px;
    color: #112364;

    white-space: pre-line;
`;

export default Block;

// import React from "react";
// import styled from "styled-components";

// const Block = ({icon, mainText, subText}) => {
//     const sub = subText;
//     return (
//             <Div>
//                 <Icon icon={icon}/>
//                 <MainText>{mainText}</MainText>
//                 <SubText>
//                     {subText}
//                 </SubText>
//             </Div>
//     )
// };


// const Div = styled.div`
//     position: relative;
//     width: 343px;
//     height: 116px;

//     background: #DBDBDB;
//     border: 1px solid #2F69FF;
//     box-sizing: border-box;
//     border-radius: 10px;
// `;

// const Icon = styled.div`
//     position: absolute;
//     width: 64px;
//     height: 64px;
//     left: 9px;
//     top: 26px;
//     bottom: 26px;

//     background: url(${props=>props.icon}) no-repeat;
// `;

// const MainText = styled.p`
//     position: absolute;
//     width: 137px;
//     height: 29px;
//     left: 73px;
//     top: 16px;

//     font-family: Spoqa Han Sans Neo;
//     font-style: normal;
//     font-weight: bold;
//     font-size: 25px;
//     line-height: 0px;

//     display: flex;
//     align-items: center;

//     margin: 0 auto;

//     color: #2F69FF;
// `;

// const SubText = styled.p`
//     position: absolute;
//     width: 225px;
//     height: 40px;
//     left: 73px;
//     top: 55px;

//     font-family: Spoqa Han Sans Neo;
//     font-style: normal;
//     font-weight: bold;
//     font-size: 15px;
//     line-height: 20px;

//     display: flex;
//     align-items: center;

//     margin: 0 auto;

//     color: #112364;

//     white-space: pre-wrap;
// `;

// export default Block;