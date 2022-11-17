import vue  from 'Vue'
import Vuex from 'Vuex'

vue.use(Vuex)

export default new Vuex.store({
  state:{
    listCart: []
  },
  action:{
    getGoods(){
      //... прочитать данные из файла
      let reader = new FileReader();
      reader.readAsText("./storeGoods.txt")
      JSON.parse(reader.result,)

    }
  },
  getters
})

