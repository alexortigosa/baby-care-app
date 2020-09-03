import {Service} from '@s-ui/domain'
export default class AddLineBasketUserService extends Service {
  constructor({userService, basketService}) {
    super()
    this._userService = userService
    this._basketService = basketService
  }

  async execute({product, quantity}) {
    const user = await this._userService.execute()
    return this._basketService.execute({userId: user.id(), product, quantity})
  }
}
