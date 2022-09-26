import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import RocketDataGrid from '../components/RocketDataGrid'
import { useGetRocketsQuery } from '../generated/graphql'
import mockRockets from '../mocks/mockRockets'
import Home from '../../pages'

jest.mock('../generated/graphql', () => {
  // eslint-disable-next-line no-shadow
  const useGetRocketsQuery = jest.fn()
  return { useGetRocketsQuery }
})

describe('components/RocketDataGrid', () => {
  beforeEach(() => jest.clearAllMocks())

  it('should render a table component', async () => {
    render(<RocketDataGrid />)

    const header = screen.getByRole('columnheader', {
      name: /name/i,
    })

    expect(header).toBeInTheDocument()
  })

  it('renders rockets', () => {
    ;(useGetRocketsQuery as jest.Mock).mockReturnValue({
      loading: false,
      error: false,
      data: mockRockets,
    })

    render(<Home />)

    expect(screen.getByText(/Mock Rocket 1/)).toBeInTheDocument()
    expect(screen.getByText(/Mock Rocket 2/)).toBeInTheDocument()
  })
})
