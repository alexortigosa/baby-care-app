import {Entity} from '@s-ui/domain'

export default class TomaEntity extends Entity {
  getId() {
    return this._id
  }

  getDate() {
    return this._date
  }

  getTime() {
    return this._date
  }

  getDateTime() {
    return this._date
  }

  isRigth() {
    return this._isRigth
  }
}
