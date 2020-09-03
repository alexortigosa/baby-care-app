import CacaRepository from './CacaRepository'

export default class FireBaseCacaRepository extends CacaRepository {
  constructor({entityFactory, listValueObjectFactory}) {
    super()
    this._entityFactory = entityFactory
    this._listValueObjectFactory = listValueObjectFactory
  }

  async addCaca(date) {
    const refsManager = this._config.get('refsManager')
    const linesRef = refsManager.ref({
      path: `/users/${userId}/basket/lines`
    })
    const newLineRef = linesRef.push()
    const line = this._inputMapper.map({product, quantity, id: newLineRef.key})
    await newLineRef.set(line.toJSON())
    return line
  }

  async getCacasByDate(date) {
    const refsManager = this._config.get('refsManager')
    const categoriesRef = refsManager.ref({path: `/users/${basketId}/basket`})
    const basket = (await categoriesRef.once('value')).val() || {}
    return this._responseMapper.map(basket)
  }
}
