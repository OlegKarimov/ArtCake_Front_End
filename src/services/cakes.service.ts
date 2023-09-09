import axios from 'axios'
//import IOrdersManager from '../types/ordersManger.types'
import IAllCakes from '../types/allCakes.types'
import ICake from '../types/cake.types';


export const cakes = {
    async getAllCakes() {
      const response = await axios.get<IAllCakes>('/api/cakes?page=0&orderBy=id&desc=false')
  //const response = await axios.get<IAllCakes>('/api/cakes?page='+page+'&orderBy=id&desc=false')
      console.log('getAllCakes', response.data);
      return response.data
    }
  }
  

export const cakeById = {
    async getCakeById(Id: number) {
   //   const response = await axios.get<ICake>('/api/cakes?page=1&orderBy=id&desc=false')
    const response = await axios.get<ICake>('/api/cakes/'+Id)
  // GET localhost:8080/api/cakes/1
      console.log('getCakeByID', response.data);
      return response.data
    }
  }


  export const cakesByCategory = {
    async getAllCakesByCategory(Category: string) {
      const response = await axios.get<IAllCakes>('/api/cakes/category/'+Category)
    //  /api/cakes/category/
      console.log('getAllCakesByCategory', response.data);
      return response.data
    }
  }
  