import Vue from 'vue'
import Vuex from 'vuex'
import navigationLinks from './modules/navigationLinks'
import users from './modules/users'
import messages from './modules/messages'


Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
      navigationLinks : navigationLinks,
      users,
      messages
    }
})