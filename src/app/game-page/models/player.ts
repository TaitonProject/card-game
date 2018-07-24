import { Card } from './card';

export class Player {
    name: string;
    cards: Array<Card>;

    constructor(name: string, cards?: Array<Card>) {
        this.name = name;
        this.cards = cards ? cards : [];
    }
}
