import {UseCase} from '@s-ui/domain'

export default class AddTomaUseCase extends UseCase {
  constructor({tomaRepository, requestFactory, currentUserService}) {
    super()
    this._tomaRepository = tomaRepository
    this._requestFactory = requestFactory
    this._currentUserService = currentUserService
  }

  async execute({date, isRigth}) {
    const request = this._requestFactory({date, isRigth})
    const user = await this._currentUserService.execute()
    const toma = await this._tomaRepository.addToma(
      request.getDate(),
      user.id()
    )
    return toma.toJSON()
  }
}
