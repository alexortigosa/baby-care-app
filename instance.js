import IdealBarDomain from '@aothechbcn/frontend-idealbar--lib-idealbar'
import * as firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import {FireBaseConfig} from './config/'
import RefsManager from './RefsManager'

firebase.initializeApp(FireBaseConfig)

const domain = new IdealBarDomain()
domain.config('firebase', firebase)
domain.config('refsManager', new RefsManager({firebase}))

export const fb = firebase
export default domain
