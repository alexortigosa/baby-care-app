import {Mapper} from '@s-ui/domain'
export default class FireBaseResponseToUserEntity extends Mapper {
  constructor({userEntity, qrGeneratorService}) {
    super()
    this._userEntity = userEntity
    this._qrGeneratorService = qrGeneratorService
  }

  map = async response => {
    return this._userEntity({...response})
  }
}
