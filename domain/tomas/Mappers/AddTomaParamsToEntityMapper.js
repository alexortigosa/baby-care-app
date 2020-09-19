import {Mapper} from '@s-ui/domain'

export default class AddTomaParamsToEntityMapper extends Mapper {
  constructor({entityFactory}) {
    super()
    this._entityFactory = entityFactory
  }

  map = ({date, id, isRigth}) => this._entityFactory({id, date, isRigth})
}
