import AddTomaRequest from './AddTomaRequest'
import GetTomaListByDateRequest from './GetTomaListByDateRequest'

export default class TomaRequestsFactory {
  static addTomaRequest = ({date, isRigth}) =>
    new AddTomaRequest({date, isRigth})

  static getTomaListByDateRequest = ({date}) =>
    new GetTomaListByDateRequest({date})
}
