import styled from "styled-components";

const NextButton = ({text, onClick, mt}) =>{
    return (
        <Button mt={mt} onClick={onClick}>
            <ButtonText>
                {text}
            </ButtonText>
        </Button>
    )
}

const Button = styled.div`
    margin: 0 auto;
    margin-left: 15px;
    margin-top: ${props=>props.mt};
    width: 360px;
    height: 59px;

    background: #2F69FF;
    border: 0.1px solid #2F69FF;
    box-sizing: border-box;
    border-radius: 10px;
`;

const ButtonText = styled.p`
    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 35px;
    color: #FFFFFF;

    margin-top: 10px;
    margin-left: 0px;

    text-align: center;
`;

export default NextButton;