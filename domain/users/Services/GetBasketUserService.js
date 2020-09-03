import Service from '@s-ui/domain/lib/Service'

export default class GetBasketUserService extends Service {
  constructor({userService, basketService}) {
    super()
    this._userService = userService
    this._basketService = basketService
  }

  async execute() {
    const user = await this._userService.execute()
    return this._basketService.execute({userId: user.id()})
  }
}
