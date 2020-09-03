import CacaRepository from './CacaRepository'
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays'

export default class LocalMemoryRepository extends CacaRepository {
  constructor({entityFactory, listValueObjectFactory}) {
    super()
    this._entityFactory = entityFactory
    this._listValueObjectFactory = listValueObjectFactory
    this._cacaLists = []
  }

  addCaca(date) {
    const caca = this._entityFactory({date})
    this._cacaLists.push(caca)
    return caca
  }

  getCacasByDate(date) {
    const filteredCaca = this._cacaLists.filter(caca =>
      differenceInCalendarDays(date, caca.getDate())
    )
    return this._listValueObjectFactory({list: filteredCaca})
  }
}
