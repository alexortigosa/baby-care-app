import TomaRepository from './TomaRepository'

export default class FireBaseTomaRepository extends TomaRepository {
  constructor({
    entityFactory,
    listValueObjectFactory,
    inputMapper,
    responseMapper,
    config
  }) {
    super()
    this._entityFactory = entityFactory
    this._listValueObjectFactory = listValueObjectFactory
    this._inputMapper = inputMapper
    this._config = config
    this._responseMapper = responseMapper
  }

  async addToma(date, userId) {
    const refsManager = this._config.get('refsManager')
    const linesRef = refsManager.ref({
      path: `/tomas/${userId}`
    })
    const newLineRef = linesRef.push()
    const line = this._inputMapper.map({date, id: newLineRef.key})
    await newLineRef.set(line.toJSON())
    return line
  }

  async getTomasByDate(date, userId) {
    const refsManager = this._config.get('refsManager')
    const categoriesRef = refsManager.ref({path: `/tomas/${userId}`})
    const tomas = (await categoriesRef.once('value')).val() || {}
    return this._responseMapper.map(tomas)
  }
}
