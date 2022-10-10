import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import QueryFilter from '../components/QueryFilter'
import '@testing-library/jest-dom'

describe('components/QueryFilter', () => {
  const renderComponent = () => render(<QueryFilter />)

  it('should render a textbox', () => {
    renderComponent()

    const inputComponent = screen.getByRole('textbox', {
      name: /search/i,
    })

    expect(inputComponent).toBeInTheDocument()
  })

  it('should show the correct value on the textbox after input', async () => {
    renderComponent()

    const inputComponent = screen.getByRole('textbox', {
      name: /search/i,
    })
    await userEvent.type(inputComponent, 'A filter')

    expect(inputComponent).toHaveValue('A filter')
  })
})
