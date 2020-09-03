import AddCacaUseCase from './AddCacaUseCase'
import CacaRepositoryFactory from '../Repositories/factory'
import CacaRequestsFactory from '../Requests/factory'
import GetCacaListByDateUseCase from './GetCacaListByDateUseCase'
import UsersServicesFactory from '../../users/Services/factory'

export default class CacaUseCasesFactory {
  static addCacaUseCase = ({config}) =>
    new AddCacaUseCase({
      cacaRepository: CacaRepositoryFactory.localMemoryCacaRepository({config}),
      requestFactory: CacaRequestsFactory.addCacaRequest,
      currentUserService: UsersServicesFactory.currentUsersService({config})
    })

  static getCacaListByDateUseCase = ({config}) =>
    new GetCacaListByDateUseCase({
      cacaRepository: CacaRepositoryFactory.localMemoryCacaRepository({config}),
      requestFactory: CacaRequestsFactory.getCacaListByDateRequest
    })
}
