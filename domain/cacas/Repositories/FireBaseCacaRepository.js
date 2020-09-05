import CacaRepository from './CacaRepository'

export default class FireBaseCacaRepository extends CacaRepository {
  constructor({entityFactory, listValueObjectFactory, inputMapper, config}) {
    super()
    this._entityFactory = entityFactory
    this._listValueObjectFactory = listValueObjectFactory
    this._inputMapper = inputMapper
    this._config = config
  }

  async addCaca(date, userId) {
    const refsManager = this._config.get('refsManager')
    const linesRef = refsManager.ref({
      path: `/cacas/${userId}`
    })
    const newLineRef = linesRef.push()
    const line = this._inputMapper.map({date, id: newLineRef.key})
    await newLineRef.set(line.toJSON())
    return line
  }

  async getCacasByDate(date, userId) {
    const refsManager = this._config.get('refsManager')
    const categoriesRef = refsManager.ref({path: `/cacas/${userId}`})
    const caca = (await categoriesRef.once('value')).val() || {}
    return this._responseMapper.map(caca)
  }
}
