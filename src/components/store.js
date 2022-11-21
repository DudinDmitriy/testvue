import vue  from 'Vue'
import Vuex from 'Vuex'

vue.use(Vuex)

export default new Vuex.store({
  state:{
    listCart: [],
    listGood: []
  },
  action:{
    loadGoods(ctx){
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
    },
  ];
  ctx.commit('setGood',goods);

  }
 },

 mutation:{
  setGood(state,goods) {
    state.listgood = goods;
  }

 },
 getters:{
  
  allGoods(state){
    return state.listGood
  }

 }
}
)

