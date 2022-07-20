import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: max-content;
`

export const Button = styled.button<{
  _bgColor: string
  _bgActive: string
}>`
  padding: 3px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${ ({ _bgColor }) => _bgColor };
  border: 0;
  cursor: pointer;
  transition: background-color 0.15s;

  &:active {
    background-color: ${ ({ _bgActive }) => _bgActive }
  }
`

export const Content = styled.ul<{
  _alignContent: 'right' | 'left'
  _bgColor: string
}>`
  position: absolute;
  background-color: ${ ({ _bgColor }) => _bgColor };
  z-index: 10;
  width: max-content;
  max-width: 200px;
  list-style-type: none;
  margin: 0;
  padding: 0;

  ${ ({ _alignContent }) => _alignContent === 'left' ? 'left: 0' : 'right: 0' };
`
