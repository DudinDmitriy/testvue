import Vue  from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
      listGood: []
  },
  action:{
    LoadGoods(ctx){
      //... прочитать данные из файла
//      let reader = new FileReader();
//      reader.readAsText("./storeGoods.txt")
//      JSON.parse(reader.result,)
   let goods = [
    { id: 1,
      name: "jacet",
      price:50
    },
    { id: 2,
      name: "bluz",
      price:90
    },
    { id: 3,
      name: "rwer w",
      price:80
    },
    { id: 4,
      name: "435345dfgdf",
      price:999
    }
  ];
  ctx.commit('setGood',goods);

  }
 },

 mutation:{
  SetGood(state,goods) {
    state.listGood = goods;
  }

 },
 getters:{
  
  AllGoods(state) {
    return state.listGood;
  }

 }
}
)

