import CacaRepository from "./CacaRepository";

export default class LocalMemoryRepository extends CacaRepository{
    constructor({entityFactory}){
        this._entityFactory = entityFactory
        this._cacaLists = [];
    }
    addCaca(date){
        const caca = this._entityFactory({date})
        this._cacaLists.push(caca)
        return caca
    }
}