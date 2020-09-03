import {UseCase} from '@s-ui/domain'

export default class AddLineBasketUserUseCase extends UseCase {
  constructor({userService}) {
    super()
    this._userService = userService
  }
  async execute({product, quantity}) {
    const lineBasket = await this._userService.execute({product, quantity})
    return lineBasket.toJSON()
  }
}
