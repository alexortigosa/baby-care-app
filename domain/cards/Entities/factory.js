import CardEntity from "./CardEntity";

export default class CardEntityFactory {
    static cardEntity = ({id, number}) => new CardEntity()
}