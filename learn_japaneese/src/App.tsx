import React, {createContext, useEffect, useState} from 'react';
import {Button} from 'antd';
import './App.css';
import Question from "./components/Question";
import Variants from "./components/Variants";
import {IQuestionSymbol, Symbol} from "./types/SymbolContextInterface";
import {
    correctAnswersCount,
    getCurrentSymbol,
    HiraganaTestCheckAnswer, isTestEnd,
    reloadTest,
    testLenght
} from "./components/hiraganaStore";
import {HiraganaSymbol} from "./types/HiraganaSymbol";

function App() {
    const [currentSymbol, setCurrentSymbol] = useState<Symbol>(getCurrentSymbol);
    const [answerResult, setAnswerResult] = useState<boolean>(true);
    const [variant, setVariant] = useState<HiraganaSymbol | null>(null);
    const [isEnd, setIsEnd] = useState<boolean>(false);

    function setNextQuestion() {
        setCurrentSymbol(getCurrentSymbol());
        setAnswerResult(true);
    }
    useEffect(()=>{
        if (isTestEnd()) {
            setIsEnd(true);
        }
    },[currentSymbol])
    function checkAnswer() {
        if (variant) {
            if (HiraganaTestCheckAnswer(variant)) {
                setNextQuestion();
            } else {
                setAnswerResult(false);
            }
        }
    }

    function reload(): void {
        reloadTest();
        setCurrentSymbol(getCurrentSymbol());
        setIsEnd(false);
        setAnswerResult(true);
    }

    return (
        <QuestionContext.Provider value={{
            symbol: currentSymbol,
            changeSymbol: () => setCurrentSymbol,
            setVariant: setVariant,
        }}>
            <div className="App">

                {isEnd ? <>
                        <div className={"ScoreCounter"}>Your Score: {correctAnswersCount() + " / " + testLenght}</div>
                        <Button onClick={reload} type="primary" className={"AnswerButton"}>Reload</Button>
                    </>
                    :
                    <div className={"QuestionCard"}>
                        <Question></Question>
                        <Variants anwerResult={answerResult}></Variants>
                        <Button onClick={checkAnswer} type="primary" className={"AnswerButton"}>Answer</Button>
                    </div>}

            </div>
        </QuestionContext.Provider>
    );
}


export const QuestionContext = createContext<IQuestionSymbol>({});

export default App;
