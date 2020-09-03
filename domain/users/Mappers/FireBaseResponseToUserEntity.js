import {Mapper} from '@s-ui/domain'
export default class FireBaseResponseToUserEntity extends Mapper {
  constructor({userEntity, qrGeneratorService}) {
    super()
    this._userEntity = userEntity
    this._qrGeneratorService = qrGeneratorService
  }

  map = async response => {
    const qrCode = await this._qrGeneratorService.generateQr(response.id)
    return this._userEntity({...response, qr: qrCode})
  }
}
