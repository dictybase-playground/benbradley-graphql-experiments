import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import QuerySizeSelector from '../components/QuerySizeSelector'
import '@testing-library/jest-dom'

describe('components/QuerySizeSelector', () => {
  const renderComponent = () => render(<QuerySizeSelector />)

  it('should render a size dropdown selector', async () => {
    renderComponent()

    expect(
      screen.getByRole('button', {
        name: /size/i,
      }),
    ).toBeInTheDocument()
  })

  it('should render size option when clicked', async () => {
    renderComponent()

    const sizeDropdown = screen.getByRole('button', {
      name: /size/i,
    })

    await userEvent.click(sizeDropdown)

    expect(
      screen.getByRole('option', {
        name: /5/i,
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('option', {
        name: /10/i,
      }),
    ).toBeInTheDocument()
  })

  it('should update size when an option is selected', async () => {
    renderComponent()

    const sizeDropdown = screen.getByRole('button', {
      name: /size/i,
    })

    await userEvent.click(sizeDropdown)

    await act(async () =>
      waitFor(() =>
        userEvent.click(
          screen.getByRole('option', {
            name: /10/i,
          }),
        ),
      ),
    )

    expect(sizeDropdown).toHaveTextContent(/10/i)
  })
})
