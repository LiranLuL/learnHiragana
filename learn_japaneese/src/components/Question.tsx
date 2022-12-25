import React, {useEffect, useState} from 'react';
import {useContext} from "react";
import {QuestionContext} from "../App";
import "../styles/Question.css"
import {correctAnswersCount, testLenght} from "./hiraganaStore";

function Question() {
    const questionContext = useContext(QuestionContext);

    const [correctAnswers, setCorrectAnswers] = useState<number>(0);

    useEffect(() => {
        setCorrectAnswers(correctAnswersCount());
    }, [questionContext.symbol])

    return <>
        <div className={"correctAnswersCounter"}>{"Correct anwsers: "+correctAnswers + " / " + testLenght}</div>
        <div className={"Header"}>{questionContext?.symbol?.kana}</div>
    </>
}

export default Question;