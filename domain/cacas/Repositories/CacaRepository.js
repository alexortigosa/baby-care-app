import { Repository } from "@s-ui/domain";

export default class CacaRepository extends Repository{
    addCaca(date){
        throw new Error(
            '[CacaRepository#addCaca] must be implemented'
          )
    }

    getCacasByDate(date){
        throw new Error(
            '[CacaRepository#getCacasByDate] must be implemented'
          )
    }
}