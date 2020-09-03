import FireBaseResponseToUserEntity from './FireBaseResponseToUserEntity'
import UsersEntitiesFactory from '../Entities/factory'

export default class UserMapperRepository {
  static fireBaseResponseToUserEntity = () =>
    new FireBaseResponseToUserEntity({
      userEntity: UsersEntitiesFactory.userEntity
    })
}
