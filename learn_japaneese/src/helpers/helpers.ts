import {HiraganaSymbol} from "../types/HiraganaSymbol";

export function getRandomInt(max: number) :number {
    return Math.floor(Math.random() * max);
}

export function shuffleMassive(array:any[]):any[] {
    let currentIndex = array.length,  randomIndex;

    while (currentIndex !== 0) {


        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;


        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

export const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
