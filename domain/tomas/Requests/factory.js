import AddTomaRequest from './AddTomaRequest'
import GetTomaListByDateRequest from './GetTomaListByDateRequest'

export default class TomaRequestsFactory {
  static addTomaRequest = ({date}) => new AddTomaRequest({date})
  static getTomaListByDateRequest = ({date}) =>
    new GetTomaListByDateRequest({date})
}
