export class Card {
    public name: string;
    public enable: boolean;

    constructor(name: string, enable?: boolean) {
        this.name = name;
        this.enable = enable !== undefined ? enable : true;
    }
}
