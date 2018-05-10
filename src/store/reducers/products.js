import {handleActions} from 'redux-actions'
import {REQUEST_PRODUCTS, ADD, REMOVE} from "../types/index"

const removeProduct = (products, pid) => {
  return products.map((item, index, array) => {
    if (item.pid === pid) {
      if (item.count > 0) {
        item.count -= 1
      }
      if (item.count <= 0) {
        item.canRemove = false
      }
    }
    return item
  })
}

const addProduct = (products, pid) => {
  //console.log(pid)
  return products.map((item, index, array) => {
    if (item.pid === pid) {
      item.count += 1
      item.canRemove = true
    }
    return item
  })
}

export default handleActions({
  [REQUEST_PRODUCTS](state, action) {
    //console.log(action)
    return action.payload
  },
  [ADD](state, action) {
    //console.log(state)
    return addProduct(state, action.payload[0])
  },
  [REMOVE](state, action) {
    return removeProduct(state, action.payload[0])
  }
}, [])