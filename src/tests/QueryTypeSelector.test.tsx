import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { act } from 'react-dom/test-utils'
import QueryTypeSelector from '../components/QueryTypeSelector'

describe('components/QueryTypeSelector', () => {
  const renderComponent = () => render(<QueryTypeSelector />)

  it('should render a type dropdown selector', () => {
    renderComponent()

    expect(
      screen.getByRole('button', {
        name: /query/i,
      }),
    ).toBeInTheDocument()
  })

  it('should render type option when clicked', async () => {
    renderComponent()

    const typeDropdown = screen.getByRole('button', {
      name: /query/i,
    })

    await userEvent.click(typeDropdown)

    expect(
      screen.getByRole('option', {
        name: /launch/i,
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('option', {
        name: /rocket/i,
      }),
    ).toBeInTheDocument()
  })

  it('should update query type when an option is selected', async () => {
    renderComponent()

    const typeDropdown = screen.getByRole('button', {
      name: /query/i,
    })

    await userEvent.click(typeDropdown)

    await act(async () =>
      waitFor(() =>
        userEvent.click(
          screen.getByRole('option', {
            name: /rocket/i,
          }),
        ),
      ),
    )

    expect(typeDropdown).toHaveTextContent(/rocket/i)
  })
})
