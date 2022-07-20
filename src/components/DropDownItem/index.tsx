import {
  AnchorHTMLAttributes,
  createElement,
  PropsWithChildren,
  CSSProperties,
  useCallback
} from 'react'

import {
  Color,
  colors
} from '../../colors'
import { useDropDown } from '../DropDown'
import { LinkIcon } from '../icons/LinkIcon'
import {
  Container,
  Content,
  Link,
  Button
} from './styles'

export type DropDownItemProps = PropsWithChildren & {
  onClick?: () => void
  href?: AnchorHTMLAttributes<HTMLAnchorElement>['href']
  hoverColor?: Color
  style?: CSSProperties
}

export function DropDownItem (props: DropDownItemProps) {
  const {
    onClick,
    children,
    hoverColor = 'blue100',
    ...rest
  } = props

  const { closeDropdown, txtColor } = useDropDown()

  const isLink = Boolean(props.href)

  const component = isLink ? Link : Button

  const handleButtonClick = useCallback(
    () => {
      if (onClick != null) {
        onClick()
      }
      closeDropdown()
    },
    [closeDropdown, onClick]
  )

  return (
    <Container _hoverColor={ colors[hoverColor] }>
      {createElement(
        component,
        {
          ...rest,
          onClick: handleButtonClick,
          _txtColor: txtColor,
          'data-testid': 'menu-item'
        },
        (
          <Content>
            <span>
              {children}
            </span>
            {isLink && (
              <LinkIcon
              data-testid="link-icon"
              color={ txtColor }
              style={ { marginLeft: 10 } }
              />
            )}
          </Content>
        )
      )}
    </Container>
  )
}
