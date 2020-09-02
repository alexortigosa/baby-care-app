import LocalMemoryRepository from "./LocalMemoryCacaRespository";
import CacaEntityFactory from "../Entities/factory";

export default class CacaRepositoryFactory{
    static localMemoryCacaRepository = ({config}) => new LocalMemoryRepository({
        entityFactory: CacaEntityFactory.cacaEntity
    })
}