import {HiraganaSymbol} from "../types/HiraganaSymbol";
import React, {useContext, useEffect, useState} from 'react';
import {QuestionContext} from "../App";
import {generateVariants} from "./hiraganaStore";
import '../styles/Variant.css'
import {answerTypes} from "../types/AnswerTypes";

const {v4: uuidv4} = require('uuid');

interface VariantsProps {
    anwerResult: boolean,
}

export interface selectedElement {
    element?: HiraganaSymbol,
    index: number,
}

function Variants(props: VariantsProps) {
    const questionContext = useContext(QuestionContext);
    const [variants, setVariants] = useState<HiraganaSymbol[] | null>([]);
    const [active, setActive] = useState<selectedElement>({index: -1});

    useEffect(() => {
        setVariants(generateVariants);
        setActive({index: -1});
    }, [questionContext.symbol])

    function markAnswer(variant: HiraganaSymbol, index: number) {
        if (questionContext.setVariant) {
            questionContext.setVariant(variant);
        }
        setActive({element: variant, index: index});
    }

    function checkVariants(variant: HiraganaSymbol) {
        if (!props.anwerResult && variant.kana === questionContext.symbol?.kana) return answerTypes.CorrectAnswer;
        return answerTypes.Default;
    }

    function isActive(index: number) {
        if (index === active.index) {
            return "ActiveVariant"
        }
        return answerTypes.Default;
    }

    return <>
        <span className={"Variants"}>
            {variants?.map((variant, index) => {
                return <div key={uuidv4()} onClick={() => markAnswer(variant, index)}
                            className={isActive(index) + " " + checkVariants(variant) + " Variant"}>{variant?.roumaji}</div>
            })}
        </span>
    </>
}

export default Variants;