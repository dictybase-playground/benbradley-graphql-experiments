import { render, screen } from '@testing-library/react'
import QuerySizeSelector from '../components/QuerySizeSelector'
import '@testing-library/jest-dom'

describe('components/QuerySizeSelector', () => {
  const renderComponent = () => render(<QuerySizeSelector />)

  it('should render a dropdown selector', () => {
    renderComponent()

    const dropdownComponent = screen.getByRole('button', {
      name: /size/i,
    })

    expect(dropdownComponent).toBeInTheDocument()
  })
})
