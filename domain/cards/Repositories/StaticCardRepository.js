import CardRepository from "./CardRepository";

export default class StaticCardRepository extends CardRepository{
    constructor({cardEntityFactory}) {
        this._cardEntityFactory = cardEntityFactory
    }

    getCards({length}){
        const list = new Array(length);
        return list.map(() => this._cardEntityFactory({id: "id1", number: Math.floor(Math.random() * 10)+1}))
    }
}