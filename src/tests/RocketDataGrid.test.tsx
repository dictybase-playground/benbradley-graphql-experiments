import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { ApolloError } from '@apollo/client'
import RocketDataGrid from '../components/RocketDataGrid'
import { useGetRocketsQuery } from '../generated/graphql'
import mockRockets from '../mocks/mockRockets'
import RocketQuery from '../components/RocketQuery'

jest.mock('../generated/graphql', () => {
  // eslint-disable-next-line no-shadow
  const useGetRocketsQuery = jest.fn()
  return { useGetRocketsQuery }
})

describe('components/RocketDataGrid', () => {
  beforeEach(() => jest.clearAllMocks())

  it('should render a table component', async () => {
    render(<RocketDataGrid rocketData={[]} />)

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

    render(<RocketQuery />)
    expect(screen.getByText(/Mock Rocket 1/)).toBeInTheDocument()
    expect(screen.getByText(/Mock Rocket 2/)).toBeInTheDocument()
    expect(screen.getByText(/Mock Rocket 3/)).toBeInTheDocument()
  })

  it('renders loader if component is loading data', () => {
    ;(useGetRocketsQuery as jest.Mock).mockReturnValue({
      loading: true,
    })

    render(<RocketQuery />)
    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })

  it('renders error if component fails to fetch data', () => {
    ;(useGetRocketsQuery as jest.Mock).mockReturnValue({
      loading: false,
      error: new ApolloError({}),
    })

    render(<RocketQuery />)
    expect(screen.getByText(/error/i)).toBeInTheDocument()
  })
})
