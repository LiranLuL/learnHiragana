import {HiraganaSymbol} from "../types/HiraganaSymbol";
import React, {useContext, useEffect, useState} from 'react';
import {QuestionContext} from "../App";
import {generateVariants} from "./hiraganaStore";
import '../styles/Variant.css'
import {answerTypes} from "../types/AnswerTypes";

const {v4: uuidv4} = require('uuid');

interface VariantsProps {
    anwerResult: boolean,
    changeVariant: any;
}

function Variants(props: VariantsProps) {
    const changeVariant = props.changeVariant
    const questionContext = useContext(QuestionContext);
    const [variants, setVariants] = useState<HiraganaSymbol[] | null>([]);
    const [active, setActive] = useState<number>(-1);

    useEffect(()=>{
    },[])

    useEffect(() => {
        setVariants(generateVariants);
        setActive(-1);

    }, [questionContext.symbol])

    function markAnswer(variant: HiraganaSymbol, index: number) {
        if (questionContext.changeVariant) {
            changeVariant(variant);
        }
        setActive(index);
    }

    function checkVariants(variant: HiraganaSymbol) {
        if (!props.anwerResult && variant.kana === questionContext.symbol?.kana) return answerTypes.CorrectAnswer;
        return answerTypes.Default;
    }

    function isActive(index: number) {
        if (index === active) {
            return "ActiveVariant"
        }
        return answerTypes.Default;
    }

    return <>
        <span  className={"Variants"}>
            {variants?.map((variant, index) => {
                return <div key={uuidv4()} onClick={() => markAnswer(variant, index)}
                            className={isActive(index) + " " + checkVariants(variant) + " Variant"}>{variant.roumaji}</div>
            })}
        </span>

    </>
}

export default Variants;