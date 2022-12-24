export interface IQuestionSymbol {
    symbol?: Symbol | null;
    changeSymbol?: () => void;
    changeVariant?: (variant:Symbol) => void;

}

export interface Symbol {
    kana: string;
    roumaji: string;
    type: string;
}