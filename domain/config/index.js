import keys from './keys'
import base from './base'
import test from './test'
import development from './development'
import production from './production'
import preproduction from './preproduction'

console.log('\n\nENV:', process.env.NODE_ENV, '\n\n') // eslint-disable-line

const envConfig = {
  development,
  preproduction,
  production,
  test
}

export default class Config {
  constructor() {
    this._config = {
      ...base,
      ...keys,
      ...envConfig[process.env.NODE_ENV]
    }
  }

  /**
   * @method
   * @param {String} key
   * @return {*}
   */
  get(key) {
    return this._config[key]
  }

  /**
   * @method
   * @param {String} key
   * @param {*} value
   * @return {*}
   */
  set(key, value) {
    this._config[key] = value
    return this
  }
}
