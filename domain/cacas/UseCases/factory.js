import AddCacaUseCase from "./AddCacaUseCase";
import CacaRepositoryFactory from "../Repositories/factory";
import CacaRequestsFactory from "../Requests/factory";

export default class CacaUseCasesFactory {
    static addCacaUseCase = ({config}) => new AddCacaUseCase({
        cacaRepository: CacaRepositoryFactory.localMemoryCacaRepository({config}),
        requestFactory: CacaRequestsFactory.addCacaRequest
    })
}