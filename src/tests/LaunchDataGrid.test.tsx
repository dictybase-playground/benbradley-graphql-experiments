/* eslint-disable camelcase */
import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Launch } from '../generated/graphql'
import LaunchDataGrid from '../components/LaunchDataGrid'

const testLaunches: Launch[] = [
  {
    id: '1',
    rocket: {
      rocket_name: 'RU Rocket',
      rocket_type: 'v1.0',
    },
    links: {
      wikipedia: 'wikilink',
    },
    launch_date_local: '2022-01-06T14:06:00-04:00',
    launch_site: {
      site_name: 'CCAFS SLC 40',
    },
    mission_name: 'RU Mission',
    launch_year: '2022',
  },
  {
    id: '2',
    rocket: {
      rocket_name: 'US Rocket',
      rocket_type: 'v1.2',
    },
    links: {
      wikipedia: 'wikilink',
    },
    launch_date_local: '2022-02-06T14:06:00-04:00',
    launch_site: {
      site_name: 'CCAFS SLC 41',
    },
    mission_name: 'US Mission',
    launch_year: '2022',
  },
  {
    id: '3',
    rocket: {
      rocket_name: 'EU Rocket',
      rocket_type: 'v1.3',
    },
    links: {
      wikipedia: 'wikilink',
    },
    launch_date_local: '2022-03-06T14:06:00-04:00',
    launch_site: {
      site_name: 'CCAFS SLC 42',
    },
    mission_name: 'EU Mission',
    launch_year: '2022',
  },
]

const testHeaders: string[] = ['name', 'year', 'mission']

describe('components/RocketDataGrid', () => {
  it('should render a table component', () => {
    render(
      <LaunchDataGrid launchHeaders={testHeaders} launchData={testLaunches} />,
    )

    expect(screen.getByRole('table')).toBeInTheDocument()
  })

  it('should render correct amount of rows', () => {
    render(
      <LaunchDataGrid launchHeaders={testHeaders} launchData={testLaunches} />,
    )

    expect(screen.getAllByRole('row')).toHaveLength(testLaunches.length + 1)
  })

  it('should render headers', () => {
    render(
      <LaunchDataGrid launchHeaders={testHeaders} launchData={testLaunches} />,
    )

    expect(
      screen.getByRole('columnheader', {
        name: /name/i,
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('columnheader', {
        name: /year/i,
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('columnheader', {
        name: /mission/i,
      }),
    ).toBeInTheDocument()
  })
})
