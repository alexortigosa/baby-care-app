import AddCacaUseCase from "./AddCacaUseCase";
import CacaRepositoryFactory from "../Repositories/factory";
import CacaRequestsFactory from "../Requests/factory";
import GetCacaListByDateUseCase from "./GetCacaListByDateUseCase";

export default class CacaUseCasesFactory {
    static addCacaUseCase = ({config}) => new AddCacaUseCase({
        cacaRepository: CacaRepositoryFactory.localMemoryCacaRepository({config}),
        requestFactory: CacaRequestsFactory.addCacaRequest
    })

    static getCacaListByDateUseCase = ({config}) => new GetCacaListByDateUseCase({
        cacaRepository: CacaRepositoryFactory.localMemoryCacaRepository({config}),
        requestFactory: CacaRequestsFactory.getCacaListByDateRequest
    })
}