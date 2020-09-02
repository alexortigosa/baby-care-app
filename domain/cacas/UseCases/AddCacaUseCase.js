import { UseCase } from "@s-ui/domain";

export default class AddCacaUseCase extends UseCase{
    constructor({cacaRepository,requestFactory}){
        super()
        this._cacaRepository = cacaRepository
        this._requestFactory = requestFactory
    }

    async execute({date}){
        const request = this._requestFactory({date})
        const caca = await this._cacaRepository.addCaca(request.getDate())
        return caca.toJSON()
    }
}