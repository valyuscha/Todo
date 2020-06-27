import React from 'react'
import {connect} from 'react-redux'
import {getInputValue, addPlanToList} from '../../redux/actions'

import {
  TodoFieldWrapper,
  TodoFieldInput,
  TodoFieldButton
} from './style'

const addListItem = (func, value) => {
  if (value.trim()) {
    func(value.trim())
  }
}

const TodoField = ({getInputValue, addPlanToList, inputValue}) => {
  return (
    <TodoFieldWrapper>
      <TodoFieldInput
        onInput={e => getInputValue(e.target.value)}
        value={inputValue}
        onChange={() => inputValue}
      />
      <TodoFieldButton onClick={() => addListItem(addPlanToList, inputValue)}>Create Plan</TodoFieldButton>
    </TodoFieldWrapper>
  )
}

const mapStateToProps = state => {
  return {
    inputValue: state.inputValue
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getInputValue: value => dispatch(getInputValue(value)),
    addPlanToList: plan => dispatch(addPlanToList(plan))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoField)