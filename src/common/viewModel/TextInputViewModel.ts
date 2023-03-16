import { TextInputValue } from './../types/TextInputValue';
export class TextInputViewModel {
    constructor(public readonly inputValue: string = "") {
    }

    get typedValue(): TextInputValue {
        return new TextInputValue(this.inputValue);
    }
    public withInputValue(inputValue: string): TextInputViewModel {
        return new TextInputViewModel(inputValue);
    }
}