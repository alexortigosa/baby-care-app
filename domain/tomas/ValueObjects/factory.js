import TomaListValueObject from './TomaListValueObject'

export default class TomaValueObjectsFactory {
  static tomaListValueObject = ({list}) => new TomaListValueObject({list})
}
