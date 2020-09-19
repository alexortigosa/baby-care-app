import {UseCase} from '@s-ui/domain'

export default class GetTomaListByDateUseCase extends UseCase {
  constructor({tomaRepository, requestFactory, currentUserService}) {
    super()
    this._tomaRepository = tomaRepository
    this._requestFactory = requestFactory
    this._currentUserService = currentUserService
  }

  async execute({date}) {
    const request = this._requestFactory({date})
    const user = await this._currentUserService.execute()
    const tomaListValueObject = await this._tomaRepository.getTomasByDate(
      request.getDate(),
      user.id()
    )
    return tomaListValueObject.toJSON()
  }
}
