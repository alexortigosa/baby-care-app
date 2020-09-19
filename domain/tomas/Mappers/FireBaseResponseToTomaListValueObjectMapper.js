import {Mapper} from '@s-ui/domain'

export default class FireBaseResponseToTomaListValueObjectMapper extends Mapper {
  constructor({entityFactory, valueObjectFactory}) {
    super()
    this._entityFactory = entityFactory
    this._valueObjectFactory = valueObjectFactory
  }

  map = data => {
    console.log(data)
    return this._valueObjectFactory({
      list: Object.keys(data).map(key => this._entityFactory(data[key]))
    })
  }
}
