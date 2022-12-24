import React from 'react';
import { useContext } from "react";
import {QuestionContext} from "../App";
import "../styles/Question.css"
function Question() {
    const questionContext = useContext(QuestionContext);
    return <div className={"Header"}>{questionContext?.symbol?.kana}</div>;
}
export default Question;