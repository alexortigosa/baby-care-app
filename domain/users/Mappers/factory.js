import FireBaseResponseToUserEntity from './FireBaseResponseToUserEntity'
import UsersEntitiesFactory from '../Entities/factory'
import QRGeneratorFactory from '../../QrGenerator/factory'

export default class UserMapperRepository {
  static fireBaseResponseToUserEntity = () =>
    new FireBaseResponseToUserEntity({
      userEntity: UsersEntitiesFactory.userEntity,
      qrGeneratorService: QRGeneratorFactory.qrCodeGenerator()
    })
}
