import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import RocketDataGrid from '../components/RocketDataGrid'
import { Rocket } from '../generated/graphql'

const testRockets: Rocket[] = [
  {
    id: '1',
    name: 'RU Rocket',
    wikipedia: 'wikilink',
    description: 'Description',
    country: 'Russia',
    active: true,
  },
  {
    id: '2',
    name: 'US Rocket',
    wikipedia: 'wikilink',
    description: 'Description',
    country: 'United States',
    active: true,
  },
  {
    id: '3',
    name: 'EU Rocket',
    wikipedia: 'wikilink',
    description: 'Description',
    country: 'Europe',
    active: true,
  },
]

const testHeaders: string[] = ['name', 'country', 'description']

describe('components/RocketDataGrid', () => {
  it('should render a table component', () => {
    render(
      <RocketDataGrid rocketHeaders={testHeaders} rocketData={testRockets} />,
    )

    expect(screen.getByRole('table')).toBeInTheDocument()
  })

  it('should render correct amount of rows', () => {
    render(
      <RocketDataGrid rocketHeaders={testHeaders} rocketData={testRockets} />,
    )

    expect(screen.getAllByRole('row')).toHaveLength(testRockets.length + 1)
  })
})
