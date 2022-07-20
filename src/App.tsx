import { colors } from './colors'
import {
  DropDown,
  DropDownItem
} from './components'
import { MenuIcon } from './components/icons'
import {
  GlobalStyle,
  Row
} from './styles'

function App () {
  return (
    <>
      <GlobalStyle />

      <Row>
        <DropDown>
          <DropDownItem>
            Rename
          </DropDownItem>
          <DropDownItem>
            Delete
          </DropDownItem>
          <DropDownItem href="https://google.com">
            Share
          </DropDownItem>
        </DropDown>

        <DropDown alignContent="right">
          <DropDownItem>
            Rename
          </DropDownItem>
          <DropDownItem>
            Delete
          </DropDownItem>
          <DropDownItem href="https://google.com">
            Share
          </DropDownItem>
        </DropDown>

        <DropDown
          alignContent="right"
          icon={ <MenuIcon color={ colors.white100 } size={ 30 } /> }
        >
          <DropDownItem>
            Rename
          </DropDownItem>
          <DropDownItem>
            Delete
          </DropDownItem>
          <DropDownItem href="https://google.com">
            Share
          </DropDownItem>
        </DropDown>
      </Row>

      <Row style={ { backgroundColor: colors.black100 } }>
        <DropDown backgroundColor="white100" textColor="black400">
          <DropDownItem hoverColor="blue400">
            Rename
          </DropDownItem>
          <DropDownItem hoverColor="red100">
            Delete
          </DropDownItem>
          <DropDownItem href="https://google.com">
            Share
          </DropDownItem>
        </DropDown>
      </Row>
    </>
  )
}

export default App
