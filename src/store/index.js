import Vuex from 'vuex'
import RightAiside from './modules/RightAiside'
import ModalView from './modules/ModalView'
import user from './modules/user'
import tasks from './modules/tasks'

export default new Vuex.Store({
   modules: {
      RightAiside,
      ModalView,
      user,
      tasks
   }
})