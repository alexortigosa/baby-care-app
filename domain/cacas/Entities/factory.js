import CacaEntity from "./CacaEntity";

export default class CacaEntityFactory {
    static cacaEntity = ({date}) => new CacaEntity({date})
}