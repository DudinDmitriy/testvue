
import Vuex from 'vuex'
import GoodStore from './models/GoodModel.ts'

const store = new Vuex.Store({
  state:{
      totalcount: 5,
      goods: []  as GoodStore[]
  },
 getters:{

 }
})

export default store;