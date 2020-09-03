import UseCase from '@s-ui/domain/lib/UseCase'

export default class GetBasketUserUseCase extends UseCase {
  constructor({userService}) {
    super()
    this._userService = userService
  }

  async execute() {
    const basket = await this._userService.execute()
    return basket.toJSON()
  }
}
