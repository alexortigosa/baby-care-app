export default class AddCacaRequest {
    constructor({date}){
        this._date = date
    }

    getDate(){
        return this._date
    }
}