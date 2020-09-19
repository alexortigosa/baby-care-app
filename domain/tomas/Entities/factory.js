import TomaEntity from './TomaEntity'

export default class TomaEntityFactory {
  static tomaEntity = ({date, id, isRigth}) =>
    new TomaEntity({date, id, isRigth})
}
