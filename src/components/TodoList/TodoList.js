import React from 'react'
import {connect} from 'react-redux'
import {deletePlanFromList} from '../../redux/actions.js'
import {
  TodoListItem,
  TodoListWrapper,
  Message
} from './style'

const TodoList = ({plans, deletePlanFromList}) => {
  localStorage.setItem('state', JSON.stringify(plans))

  return (
    <TodoListWrapper>
      {
        plans.length
          ? plans.map((plan, index) => {
            return (
              <TodoListItem key={index}>
                <span>{plan}</span>
                <i
                  className="fas fa-trash-alt"
                  onClick={() => deletePlanFromList(index, plans)}
                ></i>
              </TodoListItem>
            )
          })
          : <Message>You didn't plan anything yet</Message>
      }
    </TodoListWrapper>
  )
}

const mapStateToProps = state => {
  return {
    plans: state.plans
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deletePlanFromList: (plan, plansArr) => dispatch(deletePlanFromList(plan, plansArr))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)