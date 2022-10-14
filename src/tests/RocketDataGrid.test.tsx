import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import RocketDataGrid from '../components/RocketDataGrid'

describe('components/RocketDataGrid', () => {
  it('should render a table component', async () => {
    render(<RocketDataGrid rocketData={[]} />)

    const header = screen.getByRole('columnheader', {
      name: /name/i,
    })

    expect(header).toBeInTheDocument()
  })
})
