import UsersRepository from './UsersRepository'

export default class FireBaseUsersRepository extends UsersRepository {
  constructor({config, userMapper, qrGenerator, qrCodeValueObject} = {}) {
    super()

    this._config = config
    this._userMapper = userMapper
  }

  async current() {
    const firebase = this._config.get('firebase')
    const user = firebase.auth().currentUser

    if (!user) {
      return false
    }

    return this._userMapper.map({id: user.uid, email: user.email})
  }

  async create({email, name, password} = {}) {
    const firebase = this._config.get('firebase')
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    const user = firebase.auth().currentUser
    return this._userMapper.map({id: user.uid, email: user.email})
  }

  async login({email, password} = {}) {
    const firebase = this._config.get('firebase')
    const {user} = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
    console.log(user)
    return this._userMapper.map({id: user.uid, email: user.email})
  }

  logout() {
    const firebase = this._config.get('firebase')
    return firebase.auth().signOut()
  }
}
