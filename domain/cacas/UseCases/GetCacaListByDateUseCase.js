import { UseCase } from "@s-ui/domain";

export default class GetCacaListByDateUseCase extends UseCase{
    constructor({cacaRepository,requestFactory}){
        super()
        this._cacaRepository = cacaRepository
        this._requestFactory = requestFactory
    }

    async execute({date}){
        const request = this._requestFactory({date})
        const cacaListValueObject = await this._cacaRepository.getCacasByDate(request.getDate())
        return cacaListValueObject.toJSON()
    }
}