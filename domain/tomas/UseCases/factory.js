import AddTomaUseCase from './AddTomaUseCase'
import TomaRepositoryFactory from '../Repositories/factory'
import TomaRequestsFactory from '../Requests/factory'
import GetTomaListByDateUseCase from './GetTomaListByDateUseCase'
import UsersServicesFactory from '../../users/Services/factory'

export default class TomaUseCasesFactory {
  static addTomaUseCase = ({config}) =>
    new AddTomaUseCase({
      tomaRepository: TomaRepositoryFactory.fireBaseTomaRepository({config}),
      requestFactory: TomaRequestsFactory.addTomaRequest,
      currentUserService: UsersServicesFactory.currentUsersService({config})
    })

  static getTomaListByDateUseCase = ({config}) =>
    new GetTomaListByDateUseCase({
      tomaRepository: TomaRepositoryFactory.fireBaseTomaRepository({config}),
      requestFactory: TomaRequestsFactory.getTomaListByDateRequest,
      currentUserService: UsersServicesFactory.currentUsersService({config})
    })
}
