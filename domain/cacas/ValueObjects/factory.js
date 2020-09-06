import CacaListValueObject from './CacaListValueObject'

export default class CacaValueObjectsFactory {
  static cacaListValueObject = ({list}) => new CacaListValueObject({list})
}
