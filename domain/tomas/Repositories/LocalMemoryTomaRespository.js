import TomaRepository from './TomaRepository'
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays'

export default class LocalMemoryRepository extends TomaRepository {
  constructor({entityFactory, listValueObjectFactory}) {
    super()
    this._entityFactory = entityFactory
    this._listValueObjectFactory = listValueObjectFactory
    this._tomaLists = []
  }

  addToma(date) {
    const toma = this._entityFactory({date})
    this._tomaLists.push(toma)
    return toma
  }

  getTomasByDate(date) {
    const filteredToma = this._tomaLists.filter(toma =>
      differenceInCalendarDays(date, toma.getDate())
    )
    return this._listValueObjectFactory({list: filteredToma})
  }
}
