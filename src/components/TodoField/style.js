import styled from 'styled-components'

export const TodoFieldWrapper = styled.div`
  width: 55%;
  position: fixed;
  top: 100px;
  left: 22%;
  right: 22%;
  
  @media screen and (max-width: 960px) {
    width: 70%;
    left: 15%;
    right: 15%;
  }
  
  @media screen and (max-width: 678px) {
    width: 90%;
    left: 5%;
    right: 5%;
  }
`

export const TodoFieldInput = styled.input.attrs(() => ({
  type: 'text',
  placeholder: 'Enter your plans'
}))`
  position: relative;
  width: 100%;
  padding: 10px 115px 10px 15px;
  font-size: 16px;
  outline: none;
  border: 2px solid rgba(0, 0, 0, .5);
  border-radius: 10px;
  box-sizing: border-box;
`

export const TodoFieldButton = styled.button`
  position: absolute;
  padding: 12px 15px;
  background: rgba(0, 0, 0, .5);
  border-radius: 0 9px 9px 0;
  border: none;
  box-sizing: border-box;
  color: #ffffff;
  right: 0;
  top: 2px;
  outline: none;
  cursor: pointer;
  transition: background-color .3s;
  
  &:hover {
    background: rgba(0, 0, 0, .6);
  }
`