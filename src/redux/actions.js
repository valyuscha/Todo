import {
  ADD_PLAN_TO_LIST,
  DELETE_PLAN_FROM_LIST,
  GET_INPUT_VALUE
} from './types'

export function getInputValue(value) {
  return {
    type: GET_INPUT_VALUE,
    value
  }
}

export function addPlanToList(plan) {
  return {
    type: ADD_PLAN_TO_LIST,
    plan,
    value: ''
  }
}

export function deletePlanFromList(plan, plansArr) {
  plansArr.splice(plan, 1)

  return {
    type: DELETE_PLAN_FROM_LIST,
    plansArr
  }
}