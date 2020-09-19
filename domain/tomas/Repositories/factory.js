import LocalMemoryRepository from './LocalMemoryTomaRespository'
import TomaEntityFactory from '../Entities/factory'
import TomaValueObjectsFactory from '../ValueObjects/factory'
import TomaMappersFactory from '../Mappers/factory'
import FireBaseTomaRepository from './FireBaseTomaRepository'

export default class TomaRepositoryFactory {
  static localMemoryTomaRepository = ({config}) =>
    new LocalMemoryRepository({
      entityFactory: TomaEntityFactory.tomaEntity,
      listValueObjectFactory: TomaValueObjectsFactory.tomaListValueObject
    })

  static fireBaseTomaRepository = ({config}) =>
    new FireBaseTomaRepository({
      entityFactory: TomaEntityFactory.tomaEntity,
      listValueObjectFactory: TomaValueObjectsFactory.tomaListValueObject,
      inputMapper: TomaMappersFactory.addTomaParamsToEntityMapper(),
      config,
      responseMapper: TomaMappersFactory.fireBaseResponseToTomaListValueObjectMapper()
    })
}
