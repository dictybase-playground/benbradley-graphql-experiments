import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
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

    const sizeDropdown = screen.getByRole('button', {
      name: /query/i,
    })

    await userEvent.click(sizeDropdown)

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
})
