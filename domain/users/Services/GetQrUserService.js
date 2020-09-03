import {Service} from '@s-ui/domain'

export default class GetQrUserService extends Service {
  constructor({userRepository}) {
    super()
    this._userRepository = userRepository
  }

  execute() {
    return this._userRepository.qr()
  }
}
