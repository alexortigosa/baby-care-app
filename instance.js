import BabyCareDomain from './domain'
import * as firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
// import 'firebase/analytics'
import {FireBaseConfig} from './config/'
import RefsManager from './RefsManager'

firebase.initializeApp(FireBaseConfig)
// firebase.analytics()

const domain = new BabyCareDomain()
domain.config('firebase', firebase)
domain.config('refsManager', new RefsManager({firebase}))

export const fb = firebase
export default domain
