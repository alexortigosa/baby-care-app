export default class GetCardsUseCase {
    constructor({cardsRepository}){
        this._cardsRepository = cardsRepository
    }

    async Execute({length}){
        this._cardsRepository.getCards({length})
    }
}