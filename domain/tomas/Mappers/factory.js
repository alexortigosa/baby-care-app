import AddTomaParamsToEntityMapper from './AddTomaParamsToEntityMapper'
import TomaEntityFactory from '../Entities/factory'
import FireBaseResponseToTomaListValueObjectMapper from './FireBaseResponseToTomaListValueObjectMapper'
import TomaValueObjectsFactory from '../ValueObjects/factory'

export default class TomaMappersFactory {
  static addTomaParamsToEntityMapper = () =>
    new AddTomaParamsToEntityMapper({
      entityFactory: TomaEntityFactory.tomaEntity
    })

  static fireBaseResponseToTomaListValueObjectMapper = () =>
    new FireBaseResponseToTomaListValueObjectMapper({
      entityFactory: TomaEntityFactory.tomaEntity,
      valueObjectFactory: TomaValueObjectsFactory.tomaListValueObject
    })
}
