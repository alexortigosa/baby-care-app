import {ValueObject} from '@s-ui/domain'

export default class TomaListValueObject extends ValueObject {
  getList() {
    return this._list
  }
}
