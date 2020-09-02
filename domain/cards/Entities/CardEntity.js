export default class CardEntity {
    constructor({id,number}) {
        this._id = id
        this._number = number
    }

    getId() {
        return this._id
    }

    getNumber(){
        return this._number
    }
}