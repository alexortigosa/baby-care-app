import CacaEntity from './CacaEntity'

export default class CacaEntityFactory {
  static cacaEntity = ({date, id}) => new CacaEntity({date, id})
}
