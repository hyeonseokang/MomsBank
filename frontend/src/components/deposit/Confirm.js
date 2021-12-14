import styled from "styled-components";
import MenuBlock from "../MenuBlock";
import NextButton from "../NextButton";

const Confirm = ({onClick, amount, text, deadline}) => {
    return (
        <div>
            <TitleText>확인</TitleText>
            <SubText>한번 확인 해주세요.</SubText>
            <MenuBlock height="424px">
                <TextDiv>
                    <AmountText>{amount}</AmountText>
                    <Text>{text}</Text>
                    <AmountText>{deadline} 까지</AmountText>
                    <Text>{" 돈을 상환할게요."}</Text>
                </TextDiv>
            </MenuBlock>
            <NextButton onClick={onClick} text={"생성"} mt="17px"></NextButton>
        </div>
    )
};

const TitleText = styled.div`
    width: 48px;
    height: 35px;

    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    line-height: 35px;

    color: #2F69FF;
    margin: auto;
    margin-top: 83px;
    margin-bottom: 0px;
    text-align: center;
`;

const SubText = styled.div`
    width: 200px;
    height: 35px;

    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 35px;
    color: #112364;
    text-align: center;
    margin: auto;
    margin-top: 1px;
    margin-bottom: 9px;
`;

const TextDiv = styled.div`
    width: 339px;
    height: 337px;
    margin-left:16px;
    margin-top:27px;
`;

const AmountText = styled.span`
    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 35px;

    color: #FF0909;
`;

const Text = styled.span`
    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 35px;

    color: #494F65;

    white-space: pre-line;
`;
export {Confirm};