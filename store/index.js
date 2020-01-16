import Vuex from 'vuex'
import mutations from './mutations'
import {api} from './actions'
import getters from './getters'
import state from './state'
// import article from './modules/article'

const createStore = ()=> new Vuex.Store({
	state,
	getters,
	mutations,
	actions:api,
	// modules:{
	// 	article
	// }
})


export default createStore
