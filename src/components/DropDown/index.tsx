import {
  HTMLAttributes,
  useState,
  useMemo,
  useCallback,
  useRef,
  createContext,
  useContext
} from 'react'

import tinycolor from 'tinycolor2'
import useOnClickOutside from 'use-onclickoutside'

import {
  Color,
  colors
} from '../../colors'
import { MoreIcon } from '../icons/MoreIcon'
import {
  Button,
  Container,
  Content
} from './styles'

interface DropDownContextValue {
  bgColor: string
  txtColor: string
  closeDropdown: () => void
}

const DropDownContext = createContext<DropDownContextValue>({} as DropDownContextValue)
export const useDropDown = () => useContext(DropDownContext)

export type DropDownProps = HTMLAttributes<HTMLButtonElement> & {
  icon?: JSX.Element
  alignContent?: 'right' | 'left'
  backgroundColor?: Color
  textColor?: Color
}

export function DropDown (props: DropDownProps) {
  const {
    children,
    icon,
    alignContent = 'left',
    backgroundColor = 'black100',
    textColor = 'white100',
    ...rest
  } = props

  const [visible, setVisible] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)

  const bgColor = colors[backgroundColor]
  const txtColor = colors[textColor]

  const bgActive = useMemo(
    () => {
      const color = tinycolor(bgColor)
      return color.isLight()
        ? color.darken().toHexString()
        : color.lighten().toHexString()
    },
    [bgColor]
  )

  const handleToggleVisibility = useCallback(
    () => setVisible(old => !old),
    []
  )

  const closeDropdown = useCallback(
    () => setVisible(false),
    []
  )

  const providerValue = {
    bgColor,
    txtColor,
    closeDropdown
  }

  useOnClickOutside(containerRef, closeDropdown)

  return (
    <Container ref={ containerRef }>
      <Button
        data-testid="toggle-dropdown"
        _bgColor={ bgColor }
        _bgActive={ bgActive }
        onClick={ handleToggleVisibility }
        { ...rest }
      >
        {icon ?? <MoreIcon color={ txtColor } size={ 30 } />}
      </Button>

      <Content
        _alignContent={ alignContent }
        _bgColor={ bgColor }
      >
        <DropDownContext.Provider value={ providerValue }>
          {visible && children}
        </DropDownContext.Provider>
      </Content>
    </Container>
  )
}
