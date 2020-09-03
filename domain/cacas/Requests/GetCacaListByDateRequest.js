export default class GetCacaListByDateRequest {
    constructor({date}){
        this._date = date
    }

    getDate(){
        return this._date
    }
}