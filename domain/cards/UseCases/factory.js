import GetCardsUseCase from "./GetCardsUseCase";
import CardsRespositoryFactory from "../Repositories/factory";

export default class CardUserCasesFactory{
    static getCardsUseCase = ({config}) => new GetCardsUseCase(
            {cardsRepository: CardsRespositoryFactory.staticRespository()}
        )
}