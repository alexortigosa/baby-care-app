export default class CardRepository {
    getCards({length}) {
        throw new Error(
            '[CardRepository#getCards] must be implemented'
          )
    }
}