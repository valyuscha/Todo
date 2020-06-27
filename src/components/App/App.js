import React from 'react'
import {Header} from '../Header'
import {TodoField} from '../TodoField'
import {TodoList} from '../TodoList'

import {Container, FixedWrapper} from './style'

function App() {
  return (
    <Container>
      <FixedWrapper>
        <Header/>
        <TodoField/>
      </FixedWrapper>
      <TodoList/>
    </Container>
  )
}

export {App}
