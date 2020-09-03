import AddCacaRequest from "./AddCacaRequest";
import GetCacaListByDateRequest from "./GetCacaListByDateRequest";

export default class CacaRequestsFactory {
    static addCacaRequest = ({date}) => new AddCacaRequest({date})
    static getCacaListByDateRequest = ({date}) => new GetCacaListByDateRequest({date})
}