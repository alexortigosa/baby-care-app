import FireBaseUsersRepository from './FireBaseUsersRepository'
import UserMapperRepository from '../Mappers/factory.js'

export default class UsersResporiesFactory {
  static fireBaseUsersRepository = ({config}) =>
    new FireBaseUsersRepository({
      config,
      userMapper: UserMapperRepository.fireBaseResponseToUserEntity()
    })
}
