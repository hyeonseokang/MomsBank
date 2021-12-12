import styled from "styled-components";

const PrevButton = ({onClick}) => {
    return (
        <PrevText onClick={onClick}>
            이전
        </PrevText>
    )
}

const PrevText = styled.div`
    position: relative;
    width: 266px;
    height: 30px;
    left: 15px;
    top: 9px;

    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 0px;

    display: flex;
    align-items: center;

    color: #505791;
`;

export default PrevButton;