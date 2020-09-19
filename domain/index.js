import {EntryPointFactory} from '@s-ui/domain'
import Config from './config'
import UsersUseCasesFactory from './users/UseCases/factory'
import CacaUseCasesFactory from './cacas/UseCases/factory'
import TomaUseCasesFactory from './tomas/UseCases/factory'

const config = new Config()

const useCases = {
  create_users_use_case: UsersUseCasesFactory.createUsersUseCase({config}),
  current_users_use_case: UsersUseCasesFactory.currentUsersUseCase({config}),
  is_privileged_users_use_case: UsersUseCasesFactory.isPrivilegedUsersUseCase({
    config
  }),
  login_users_use_case: UsersUseCasesFactory.loginUsersUseCase({config}),
  logout_users_use_case: UsersUseCasesFactory.logoutUsersUseCase({config}),
  add_caca_use_case: CacaUseCasesFactory.addCacaUseCase({config}),
  get_caca_list_by_date: CacaUseCasesFactory.getCacaListByDateUseCase({config}),
  add_toma_use_case: TomaUseCasesFactory.addTomaUseCase({config}),
  get_toma_list_by_date: TomaUseCasesFactory.getTomaListByDateUseCase({config})
}
// Export entry point
export default EntryPointFactory({config, useCases})
