import styled from 'styled-components'

export const Container = styled.li<{
  _hoverColor: string
}>`
  &:focus-within, &:hover {
    background-color: ${ ({ _hoverColor }) => _hoverColor };
  }
`

export const Content = styled.div`
  font-size: 1rem;
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Link = styled.a.attrs({ target: '_blank' })<{
  _txtColor: string
}>`
  width: 100%;
  color: ${ ({ _txtColor }) => _txtColor };
  text-decoration: none;
  &:focus-visible, &:hover {
    outline: none
  }
`

export const Button = styled.button<{
  _txtColor: string
}>`
  width: 100%;
  color: ${ ({ _txtColor }) => _txtColor };
  background: none;
  margin: 0;
  padding: 0;
  border: 0;
  &:focus-visible, &:hover {
    outline: none
  }
`
