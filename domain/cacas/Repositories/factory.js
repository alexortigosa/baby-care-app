import LocalMemoryRepository from './LocalMemoryCacaRespository'
import CacaEntityFactory from '../Entities/factory'
import CacaValueObjectsFactory from '../ValueObjects/factory'
import CacaMappersFactory from '../Mappers/factory'

export default class CacaRepositoryFactory {
  static localMemoryCacaRepository = ({config}) =>
    new LocalMemoryRepository({
      entityFactory: CacaEntityFactory.cacaEntity,
      listValueObjectFactory: CacaValueObjectsFactory.cacaListValueObject,
      inputMapper: CacaMappersFactory.addCacaParamsToEntityMapper()
    })
}
