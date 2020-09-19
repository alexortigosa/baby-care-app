export default class AddTomaRequest {
  constructor({date, isRigth}) {
    this._date = date
    this._isRigth = isRigth
  }

  getDate() {
    return this._date
  }

  getIsRigth() {
    return this._isRigth
  }
}
