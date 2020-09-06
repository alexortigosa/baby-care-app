import {UseCase} from '@s-ui/domain'

export default class GetCacaListByDateUseCase extends UseCase {
  constructor({cacaRepository, requestFactory, currentUserService}) {
    super()
    this._cacaRepository = cacaRepository
    this._requestFactory = requestFactory
    this._currentUserService = currentUserService
  }

  async execute({date}) {
    const request = this._requestFactory({date})
    const user = await this._currentUserService.execute()
    const cacaListValueObject = await this._cacaRepository.getCacasByDate(
      request.getDate(),
      user.id()
    )
    return cacaListValueObject.toJSON()
  }
}
