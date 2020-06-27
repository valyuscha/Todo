import {
  GET_INPUT_VALUE,
  ADD_PLAN_TO_LIST,
  DELETE_PLAN_FROM_LIST
} from './types'

const initialState = {
  inputValue: '',
  plans: JSON.parse(localStorage.getItem('state')) || []
}

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_INPUT_VALUE:
      return {...state, inputValue: action.value}
    case ADD_PLAN_TO_LIST:
      return {...state, plans: [...state.plans, action.plan], inputValue: action.value}
    case DELETE_PLAN_FROM_LIST:
      return {...state, plans: [...action.plansArr]}
    default:
      return {...state}
  }
}