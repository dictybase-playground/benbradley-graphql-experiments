import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import PaginationControl from '../components/PaginationControl'
import '@testing-library/jest-dom'

describe('components/QueryFilter', () => {
  it('should render pagination control buttons', () => {
    render(<PaginationControl pageItemLimit={0} totalItems={0} />)

    const previousButton = screen.getByRole('button', {
      name: /previous/i,
    })
    const nextButton = screen.getByRole('button', {
      name: /next/i,
    })

    expect(previousButton).toBeInTheDocument()
    expect(nextButton).toBeInTheDocument()
  })
})
