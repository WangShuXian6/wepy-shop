import {ADD, REMOVE} from "../types/index"
import {createAction} from 'redux-actions'

export const add = createAction(ADD)

export const remove = createAction(REMOVE)