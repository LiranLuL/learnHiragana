import hiraganaElements from '../alpabets/hiragana.json';
import {HiraganaSymbol} from "../types/HiraganaSymbol";
import {getRandomInt, shuffleMassive, shuffleArray} from "../helpers/helpers";

let currentIndex: number = 0;
export const hiraganaAlphabet: HiraganaSymbol[] = JSON.parse(JSON.stringify(hiraganaElements));
export const randomHiraganaSymbol = (): HiraganaSymbol => {
    return hiraganaAlphabet[getRandomInt(hiraganaAlphabet.length)];
};
export const correctAnswersCount = (): number => {
    return hiraganaTest.filter((elem)=>{return elem.isCorrect===true}).length;
};
let hiraganaTest: HiraganaSymbol[] = shuffleArray(hiraganaAlphabet.slice(0));
export let testLenght = hiraganaTest.length;
export function reloadTest(){
    hiraganaTest=shuffleArray(JSON.parse(JSON.stringify(hiraganaElements)));
    currentIndex=0;
}
export const HiraganaTestCheckAnswer = (answer: HiraganaSymbol): boolean => {
    if (hiraganaTest[currentIndex]?.roumaji === answer?.roumaji) {
        if (hiraganaTest[currentIndex].isCorrect === undefined) {
            hiraganaTest[currentIndex].isCorrect = true;
        }
        currentIndex++;
        return true
    } else {
        hiraganaTest[currentIndex].isCorrect = false;
        return false;
    }
};
export const generateVariants = (): HiraganaSymbol[] => {
    const variants: HiraganaSymbol[] = [];
    variants.push(hiraganaTest[currentIndex]);
    variants.push(currentIndex < hiraganaAlphabet.length - 1 ? hiraganaTest[currentIndex + 1] : randomHiraganaSymbol());
    variants.push(currentIndex > 0 ? hiraganaTest[currentIndex - 1] : randomHiraganaSymbol());
    for (let i = 0; i < 3; i++) {
        variants.push(randomHiraganaSymbol());
    }
    return shuffleMassive(variants);
}

export const getCurrentSymbol = (): HiraganaSymbol => {
    return hiraganaTest[currentIndex];
}

export const isTestEnd = (): boolean => {
    return currentIndex > hiraganaTest.length-1;
}
