/* eslint-disable @typescript-eslint/no-extra-semi */
import React from 'react'
import '@testing-library/jest-dom'
import { Matcher, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ApolloError } from '@apollo/client'
import { useGetLaunchesQuery } from '../generated/graphql'
import QueryFilter from '../components/QueryFilter'
import LaunchQuery from '../components/LaunchQuery'
import mockLaunches from '../mocks/mockLaunches'

jest.mock('../generated/graphql', () => {
  // eslint-disable-next-line no-shadow
  const useGetLaunchesQuery = jest.fn()
  return { useGetLaunchesQuery }
})

describe('components/LaunchQuery', () => {
  beforeEach(() => jest.clearAllMocks())

  const renderComponents = () => {
    render(<QueryFilter />)
    render(<LaunchQuery />)
  }

  it('renders launch data', () => {
    ;(useGetLaunchesQuery as jest.Mock).mockReturnValue({
      loading: false,
      error: false,
      data: mockLaunches,
    })

    render(<LaunchQuery />)
    const launch1 = screen.getByText(
      mockLaunches.launches?.at(0)?.mission_name as Matcher,
    )
    const launch2 = screen.getByText(
      mockLaunches.launches?.at(1)?.mission_name as Matcher,
    )
    const launch3 = screen.getByText(
      mockLaunches.launches?.at(2)?.mission_name as Matcher,
    )

    expect(launch1).toBeInTheDocument()
    expect(launch2).toBeInTheDocument()
    expect(launch3).toBeInTheDocument()
  })

  it('should filter launch data from input', async () => {
    ;(useGetLaunchesQuery as jest.Mock).mockReturnValue({
      loading: false,
      error: false,
      data: mockLaunches,
    })

    renderComponents()
    const inputComponent = screen.getByRole('textbox', {
      name: /search/i,
    })
    const unfilteredElement = screen.getByText(
      mockLaunches.launches?.at(0)?.mission_name as Matcher,
    )
    const filteredElement1 = screen.getByText(
      mockLaunches.launches?.at(1)?.mission_name as Matcher,
    )
    const filteredElement2 = screen.getByText(
      mockLaunches.launches?.at(2)?.mission_name as Matcher,
    )

    expect(unfilteredElement).toBeInTheDocument()
    expect(filteredElement1).toBeInTheDocument()
    expect(filteredElement2).toBeInTheDocument()

    await userEvent.type(
      inputComponent,
      mockLaunches.launches?.at(0)?.mission_name as string,
    )

    expect(unfilteredElement).toBeInTheDocument()
    expect(filteredElement1).not.toBeInTheDocument()
    expect(filteredElement2).not.toBeInTheDocument()
  })

  it('renders loader if component is loading data', () => {
    ;(useGetLaunchesQuery as jest.Mock).mockReturnValue({
      loading: true,
    })

    render(<LaunchQuery />)
    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })

  it('renders error if component fails to fetch data', () => {
    ;(useGetLaunchesQuery as jest.Mock).mockReturnValue({
      loading: false,
      error: new ApolloError({}),
    })

    render(<LaunchQuery />)
    expect(screen.getByText(/error/i)).toBeInTheDocument()
  })
})
