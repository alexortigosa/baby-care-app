export default class GetTomaListByDateRequest {
  constructor({date}) {
    this._date = date
  }

  getDate() {
    return this._date
  }
}
