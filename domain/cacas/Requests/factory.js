import AddCacaRequest from "./AddCacaRequest";

export default class CacaRequestsFactory {
    static addCacaRequest = ({date}) => new AddCacaRequest({date})
}