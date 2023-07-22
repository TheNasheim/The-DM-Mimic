export class TextViewModel {

    constructor(public readonly inputValue: string = "") {
    }

    get typedValue(): String {
        return new String(this.inputValue);
    }

    public withInputValue(inputValue: string): TextViewModel {
        return new TextViewModel(inputValue);
    }

}