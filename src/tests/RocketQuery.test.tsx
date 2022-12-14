/* eslint-disable @typescript-eslint/no-extra-semi */
import React from 'react'
import '@testing-library/jest-dom'
import { Matcher, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ApolloError } from '@apollo/client'
import { useGetRocketsQuery } from '../generated/graphql'
import mockRockets from '../mocks/mockRockets'
import RocketQuery from '../components/RocketQuery'
import QueryFilter from '../components/QueryFilter'

jest.mock('../generated/graphql', () => {
  // eslint-disable-next-line no-shadow
  const useGetRocketsQuery = jest.fn()
  return { useGetRocketsQuery }
})

describe('components/RocketQuery', () => {
  beforeEach(() => jest.clearAllMocks())

  const renderComponents = () => {
    render(<QueryFilter />)
    render(<RocketQuery />)
  }

  it('renders rockets', () => {
    ;(useGetRocketsQuery as jest.Mock).mockReturnValue({
      loading: false,
      error: false,
      data: mockRockets,
    })

    render(<RocketQuery />)
    const rocket1 = screen.getByText(
      mockRockets.rockets?.at(0)?.name as Matcher,
    )
    const rocket2 = screen.getByText(
      mockRockets.rockets?.at(1)?.name as Matcher,
    )
    const rocket3 = screen.getByText(
      mockRockets.rockets?.at(2)?.name as Matcher,
    )

    expect(rocket1).toBeInTheDocument()
    expect(rocket2).toBeInTheDocument()
    expect(rocket3).toBeInTheDocument()
  })

  it('should filter data from input', async () => {
    ;(useGetRocketsQuery as jest.Mock).mockReturnValue({
      loading: false,
      error: false,
      data: mockRockets,
    })

    renderComponents()
    const inputComponent = screen.getByRole('textbox', {
      name: /search/i,
    })
    const unfilteredElement = screen.getByText(
      mockRockets.rockets?.at(0)?.name as Matcher,
    )
    const filteredElement1 = screen.getByText(
      mockRockets.rockets?.at(1)?.name as Matcher,
    )
    const filteredElement2 = screen.getByText(
      mockRockets.rockets?.at(2)?.name as Matcher,
    )

    expect(unfilteredElement).toBeInTheDocument()
    expect(filteredElement1).toBeInTheDocument()
    expect(filteredElement2).toBeInTheDocument()

    await userEvent.type(
      inputComponent,
      mockRockets.rockets?.at(0)?.name as string,
    )

    expect(unfilteredElement).toBeInTheDocument()
    expect(filteredElement1).not.toBeInTheDocument()
    expect(filteredElement2).not.toBeInTheDocument()
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
