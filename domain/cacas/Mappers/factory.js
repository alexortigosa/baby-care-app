import {Mapper} from '@s-ui/domain'
import AddCacaParamsToEntityMapper from './AddCacaParamsToEntityMapper'
import CacaEntityFactory from '../Entities/factory'

export default class CacaMappersFactory {
  static addCacaParamsToEntityMapper = () =>
    new AddCacaParamsToEntityMapper({
      entityFactory: CacaEntityFactory.cacaEntity
    })
}
