import axios from 'axios'
import IOrdersManager from '../types/ordersManger.types'
//import IAllCakes from '../types/allCakes.types'
import IAllCakes from '../types/allCakes.types'
import ICake from '../types/cake.types';


export const managerServices = {
  async getOrders() {
    const response = await axios.get<IOrdersManager>('/api/users/manager/orders')
    console.log('getOrders', response.data);
    return response.data
  }
}


