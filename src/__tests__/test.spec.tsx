import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import {
  DropDown,
  DropDownItem
} from '../components'

describe('DropDown Component', () => {
  it('should be closed on start', () => {
    const { queryByText } = render(
      <DropDown>
        <DropDownItem>
          item 1
        </DropDownItem>
      </DropDown>
    )
    expect(queryByText('item 1')).not.toBeInTheDocument()
  })

  it('should be opened after click on menu button', async () => {
    const { getByText, getByTestId } = render(
      <DropDown>
        <DropDownItem>
          item 1
        </DropDownItem>
      </DropDown>
    )

    const button = getByTestId('toggle-dropdown')
    await userEvent.click(button)

    expect(getByText('item 1')).toBeInTheDocument()
  })

  it('should toggle with keyboard interation', async () => {
    const { getByTestId, queryByText } = render(
      <DropDown>
        <DropDownItem>
          item 1
        </DropDownItem>
      </DropDown>
    )

    expect(document.body).toHaveFocus()

    await userEvent.tab()

    const button = getByTestId('toggle-dropdown')

    expect(button).toHaveFocus()

    await userEvent.keyboard('{enter}')

    expect(queryByText('item 1')).toBeInTheDocument()

    await userEvent.keyboard('{enter}')

    expect(queryByText('item 1')).not.toBeInTheDocument()
  })

  it('should close after click outside', async () => {
    const { getByTestId, queryByText } = render(
      <div data-testid="outside-div">
        <DropDown>
          <DropDownItem>
            item 1
          </DropDownItem>
        </DropDown>
      </div>
    )

    const button = getByTestId('toggle-dropdown')
    await userEvent.click(button)

    const outsideDiv = getByTestId('outside-div')
    await userEvent.click(outsideDiv)

    expect(queryByText('item 1')).not.toBeInTheDocument()
  })
})

describe('DropDownItem Component', () => {
  it('when opened, show 2 items', async () => {
    const { getByText, getByTestId } = render(
      <DropDown>
        <DropDownItem>
          item 1
        </DropDownItem>
        <DropDownItem>
          item 2
        </DropDownItem>
      </DropDown>
    )

    const button = getByTestId('toggle-dropdown')
    await userEvent.click(button)

    expect(getByText('item 1')).toBeInTheDocument()
    expect(getByText('item 2')).toBeInTheDocument()
  })

  it('when opened, show 1 button item', async () => {
    const { getByTestId } = render(
      <DropDown>
        <DropDownItem>
          item 1
        </DropDownItem>
      </DropDown>
    )

    const button = getByTestId('toggle-dropdown')
    await userEvent.click(button)

    const menuItem = getByTestId('menu-item')

    expect(menuItem.tagName).toBe('BUTTON')
  })

  it('when opened, show 1 link item', async () => {
    const { getByTestId } = render(
      <DropDown>
        <DropDownItem href="https://google.com">
          item 1
        </DropDownItem>
      </DropDown>
    )

    const button = getByTestId('toggle-dropdown')
    await userEvent.click(button)

    const menuItem = getByTestId('menu-item')

    expect(menuItem.tagName).toBe('A')
  })

  it('link item should be an icon', async () => {
    const { getByTestId } = render(
      <DropDown>
        <DropDownItem href="https://google.com">
          item 1
        </DropDownItem>
      </DropDown>
    )

    const button = getByTestId('toggle-dropdown')
    await userEvent.click(button)

    expect(getByTestId('link-icon')).toBeInTheDocument()
  })

  it('should close after click on item', async () => {
    const { getByTestId } = render(
      <DropDown>
        <DropDownItem>
          item 1
        </DropDownItem>
      </DropDown>
    )

    const button = getByTestId('toggle-dropdown')
    await userEvent.click(button)

    const menuItem = getByTestId('menu-item')
    await userEvent.click(menuItem)

    expect(menuItem).not.toBeInTheDocument()
  })

  it('when opened, run menu item callback with keyboard interation', async () => {
    const handleItemClick = jest.fn()

    const { getByTestId } = render(
      <DropDown>
        <DropDownItem onClick={ handleItemClick }>
          item 1
        </DropDownItem>
      </DropDown>
    )

    expect(document.body).toHaveFocus()
    await userEvent.tab()

    const button = getByTestId('toggle-dropdown')
    expect(button).toHaveFocus()

    await userEvent.keyboard('{enter}')

    const menuItem = getByTestId('menu-item')

    expect(menuItem).toBeInTheDocument()

    await userEvent.tab()

    expect(menuItem).toHaveFocus()

    await userEvent.keyboard('{enter}')

    expect(handleItemClick).toHaveBeenCalledTimes(1)
  })
})
