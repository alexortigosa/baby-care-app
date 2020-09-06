import AddCacaParamsToEntityMapper from './AddCacaParamsToEntityMapper'
import CacaEntityFactory from '../Entities/factory'
import FireBaseResponseToCacaListValueObjectMapper from './FireBaseResponseToCacaListValueObjectMapper'
import CacaValueObjectsFactory from '../ValueObjects/factory'

export default class CacaMappersFactory {
  static addCacaParamsToEntityMapper = () =>
    new AddCacaParamsToEntityMapper({
      entityFactory: CacaEntityFactory.cacaEntity
    })

  static fireBaseResponseToCacaListValueObjectMapper = () =>
    new FireBaseResponseToCacaListValueObjectMapper({
      entityFactory: CacaEntityFactory.cacaEntity,
      valueObjectFactory: CacaValueObjectsFactory.cacaListValueObject
    })
}
