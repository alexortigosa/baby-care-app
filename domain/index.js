import {EntryPointFactory} from '@s-ui/domain'
import Config from './config'
import UsersUseCasesFactory from './users/UseCases/factory'
import CacaUseCasesFactory from './cacas/UseCases/factory'

const config = new Config()

const useCases = {
  create_users_use_case: UsersUseCasesFactory.createUsersUseCase({config}),
  current_users_use_case: UsersUseCasesFactory.currentUsersUseCase({config}),
  is_privileged_users_use_case: UsersUseCasesFactory.isPrivilegedUsersUseCase({
    config
  }),
  login_users_use_case: UsersUseCasesFactory.loginUsersUseCase({config}),
  logout_users_use_case: UsersUseCasesFactory.logoutUsersUseCase({config}),
  
}
// Export entry point
export default EntryPointFactory({config, useCases})
