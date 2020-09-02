import StaticCardRepository from "./StaticCardRepository";
import CardEntityFactory from "../Entities/factory";

export default class CardsRespositoryFactory {
    static staticRespository = ({}) => new StaticCardRepository({cardEntityFactory: CardEntityFactory.cardEntity})
}