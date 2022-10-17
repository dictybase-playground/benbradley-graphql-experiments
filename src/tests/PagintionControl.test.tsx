/* eslint-disable @typescript-eslint/no-extra-semi */
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import PaginationControl from '../components/PaginationControl'
import { useGetLaunchesQuery } from '../generated/graphql'
import '@testing-library/jest-dom'
import mockLaunches from '../mocks/mockLaunches'

jest.mock('../generated/graphql', () => {
  // eslint-disable-next-line no-shadow
  const useGetLaunchesQuery = jest.fn()
  return { useGetLaunchesQuery }
})

const testPageSize = 10

describe('components/QueryFilter', () => {
  it('should render pagination control buttons', () => {
    render(<PaginationControl pageItemLimit={0} totalItems={0} />)

    const previousButton = screen.getByRole('button', {
      name: /previous/i,
    })
    const nextButton = screen.getByRole('button', {
      name: /next/i,
    })

    // check page number
    expect(screen.getByText(/1/)).toBeInTheDocument()
    expect(previousButton).toBeInTheDocument()
    expect(previousButton).toBeDisabled()
    expect(nextButton).toBeInTheDocument()
  })

  it('increments and decrements page number when clicking next/prev buttons', async () => {
    ;(useGetLaunchesQuery as jest.Mock).mockReturnValue({
      loading: false,
      error: false,
      data: mockLaunches,
    })

    render(
      <PaginationControl
        pageItemLimit={testPageSize}
        totalItems={mockLaunches.launches?.length as number}
      />,
    )

    const previousButton = screen.getByRole('button', {
      name: /previous/i,
    })
    const nextButton = screen.getByRole('button', {
      name: /next/i,
    })

    await userEvent.click(nextButton)

    expect(previousButton).toBeEnabled()
    expect(screen.getByText(/2/)).toBeInTheDocument()

    await userEvent.click(previousButton)

    expect(previousButton).toBeDisabled()
    expect(screen.getByText(/1/)).toBeInTheDocument()
  })
})
