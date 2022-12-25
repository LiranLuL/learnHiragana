export function getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
}

export function shuffleMassive(array: any[]): any[] {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}
export function shuffleArray(array:any[]) {
    let arrayd = array.slice(0);
    for (var i = arrayd.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arrayd[i];
        arrayd[i] = arrayd[j];
        arrayd[j] = temp;
    }
    return arrayd;
}
export const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
