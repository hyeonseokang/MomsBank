import Title from "../Title";
import styled from "styled-components";
import NextButton from "../NextButton";
import { useState, useEffect, useRef } from "react";

const Success = ({location, history}) => {
    const GoHome = () => {
        history.push('/');
    }
    const [time, setTime] = useState(4);
    const interval = useRef(null);

    useEffect(()=>{
        interval.current = setTimeout(()=>{
            setTime(time - 1);
        }, 1000);

        if (time === 0)
            GoHome();
    }, [time]);

    return (
        <div>
            <Title explan={location.state.titleText} />
            <Text>
                {"축하 드립니다.\n현서에게 신청했다는\n메시지를 보내면\n\n\n 알아서 해드립니다."}
            </Text>
            <NextButton text={`홈 (${time - 1}초 후에 자동)`} mt={"200px"} onClick={GoHome}/>
        </div>
    )
};

const Text = styled.div`
    width: 339px;
    height: 328px;

    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 35px;

    text-align: center;
    white-space: pre-line;

    margin: auto;
    margin-top: 100px;
    margin-bottom: 0px;
`;
export default Success;