import styled from "styled-components";

const BankButton = ({icon, text, onClick}) => {
    return (
        <Div onClick={()=>{onClick(text)}}>
            <BankButtonDiv>
                <img src={icon} />
            </BankButtonDiv>
            <Text>
                {text}
            </Text>
        </Div>
    )
};

const Div = styled.div`
    display: inline-block;
    margin-left: 34px;
    margin-top: 50px;
    margin-right: 19px;
`;

const BankButtonDiv = styled.div`
    width: 116px;
    height: 116px;
    background: #DBDBDB;
    border: 1px solid #2F69FF;
    box-sizing: border-box;
    border-radius: 10px;
    margin-bottom: 0px;

    >img{
        width: 95px;
        height: 95px;
        margin-left: 10px;
        margin-top: 10px;
    }
`;

const Text = styled.div`
    margin-top: 19px;
    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 0px;

    text-align: center;

    color: #000000;

`;

export default BankButton;