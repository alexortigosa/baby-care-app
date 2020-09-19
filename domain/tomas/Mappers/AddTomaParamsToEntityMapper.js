import {Mapper} from '@s-ui/domain'

export default class AddTomaParamsToEntityMapper extends Mapper {
  constructor({entityFactory}) {
    super()
    this._entityFactory = entityFactory
  }

  map = ({date, id}) => this._entityFactory({id, date})
}
