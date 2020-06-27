import styled from 'styled-components'

export const TodoListWrapper = styled.ul`
  width: 55%;
  margin: 200px auto 50px;
  box-sizing: border-box;
  
  @media screen and (max-width: 960px) {
    width: 70%;
  }
  
  @media screen and (max-width: 678px) {
    width: 90%;
  }
`

export const TodoListItem = styled.li`
  padding: 10px 15px;
  background: rgba(0, 0, 0, .5);
  color: #ffffff;
  list-style: none;
  border-radius: 10px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  
  span {
    max-width: 90%;
    white-space: nowrap; 
    overflow: hidden; 
    text-overflow: ellipsis;
  }
  
  i {
    cursor: pointer;
  } 
  
  &:last-child {
    margin-bottom: 0;
  }
`

export const Message = styled.p`
  text-align: center;
`