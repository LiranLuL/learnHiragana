import {selectedElement} from "../components/Variants";
import {HiraganaSymbol} from "./HiraganaSymbol";

export interface IQuestionSymbol {
    symbol?: Symbol | null;
    changeSymbol?: () => void;
    setVariant?: (variant:any) => void;
}

export interface Symbol {
    kana: string;
    roumaji: string;
    type: string;
}