import hiraganaElements from '../alpabets/hiragana.json';
import {HiraganaSymbol} from "../types/HiraganaSymbol";
import {getRandomInt, shuffleMassive} from "../helpers/helpers";

let currentIndex: number = 0;
export const hiraganaAlphabet: HiraganaSymbol[] = hiraganaElements;
export const randomHiraganaSymbol = (): HiraganaSymbol => {
    return hiraganaAlphabet[getRandomInt(hiraganaAlphabet.length)];
};

const hiraganaTest: HiraganaSymbol[] = shuffleMassive(hiraganaAlphabet);
export const HiraganaTestCheckAnswer = (answer: HiraganaSymbol): boolean => {

    console.log(currentIndex)
    if (hiraganaTest[currentIndex].roumaji === answer.roumaji) {
        currentIndex++;
        return true
    }

    return false;
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
