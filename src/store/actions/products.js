import {REQUEST_PRODUCTS, ADD, REMOVE} from '../types/index'
import {createAction} from 'redux-actions'

export const asyncRequestProducts = createAction(REQUEST_PRODUCTS)

export const add = createAction(ADD)

export const remove = createAction(REMOVE)