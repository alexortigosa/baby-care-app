import {Repository} from '@s-ui/domain'

export default class TomaRepository extends Repository {
  addToma(date) {
    throw new Error('[TomaRepository#addToma] must be implemented')
  }

  getTomasByDate(date) {
    throw new Error('[TomaRepository#getTomasByDate] must be implemented')
  }
}
