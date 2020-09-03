import UsersRepository from './UsersRepository'

export default class FireBaseUsersRepository extends UsersRepository {
  constructor({config, userMapper, qrGenerator, qrCodeValueObject} = {}) {
    super()

    this._config = config
    this._userMapper = userMapper
    this._qrGenerator = qrGenerator
    this._qrCodeValueObject = qrCodeValueObject
  }

  async current() {
    const firebase = this._config.get('firebase')
    const user = firebase.auth().currentUser

    if (!user) {
      return false
    }

    const userDB = (await firebase
      .database()
      .ref(`/users/${user.uid}`)
      .once('value')).val()
    return this._userMapper.map(userDB)
  }

  async create({email, name, password} = {}) {
    const firebase = this._config.get('firebase')
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    const user = firebase.auth().currentUser
    await firebase
      .database()
      .ref(`/users/${user.uid}`)
      .set({
        email,
        name,
        id: user.uid
      })

    return this._userMapper.map({email, id: user.uid, name})
  }

  async login({email, password} = {}) {
    const firebase = this._config.get('firebase')
    const {user} = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
    const userDB = (await firebase
      .database()
      .ref(`/users/${user.uid}`)
      .once('value')).val()
    return this._userMapper.map(userDB)
  }

  async qr() {
    const firebase = this._config.get('firebase')
    const user = firebase.auth().currentUser
    console.log(user)
    if (!user) {
      return false
    }
    const qrCode = await this._qrGenerator.generateQr(user.id)
    return this._qrCodeValueObject({qrCode})
  }

  logout() {
    const firebase = this._config.get('firebase')
    return firebase.auth().signOut()
  }
}
