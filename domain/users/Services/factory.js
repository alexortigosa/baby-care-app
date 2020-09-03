import UsersRepositoriesFactory from '../Repositories/factory'

import CreateUsersService from './CreateUsersService'
import CurrentUsersService from './CurrentUsersService'
import LoginUsersService from './LoginUsersService'
import LogoutUsersService from './LogoutUsersService'
import GetQrUserService from './GetQrUserService'
import GetBasketUserService from './GetBasketUserService'
import BasketServiceFactory from '../../basket/Services/factory'
import AddLineBasketUserService from './AddLineBasketUserService'

export default class UsersServicesFactory {
  static currentUsersService = ({config}) =>
    new CurrentUsersService({
      repository: UsersRepositoriesFactory.fireBaseUsersRepository({config})
    })

  static loginUsersService = ({config}) => {
    return new LoginUsersService({
      repository: UsersRepositoriesFactory.fireBaseUsersRepository({config})
    })
  }

  static createUsersService = ({config}) =>
    new CreateUsersService({
      repository: UsersRepositoriesFactory.fireBaseUsersRepository({config})
    })

  static logoutUsersService = ({config}) =>
    new LogoutUsersService({
      repository: UsersRepositoriesFactory.fireBaseUsersRepository({config})
    })

  static getQrUserService = ({config}) =>
    new GetQrUserService({
      userRepository: UsersRepositoriesFactory.fireBaseUsersRepository({config})
    })

  static getBasketUserService = ({config}) =>
    new GetBasketUserService({
      userService: UsersServicesFactory.currentUsersService({config}),
      basketService: BasketServiceFactory.getUserBasketService({config})
    })

  static addLineBasketUserService = ({config}) =>
    new AddLineBasketUserService({
      userService: UsersServicesFactory.currentUsersService({config}),
      basketService: BasketServiceFactory.addLineToBasketService({config})
    })
}
