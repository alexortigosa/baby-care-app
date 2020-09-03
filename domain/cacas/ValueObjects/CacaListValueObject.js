import { ValueObject } from "@s-ui/domain";

export default class CacaListValueObject extends ValueObject{
    getList(){
        return this._list;
    }
}