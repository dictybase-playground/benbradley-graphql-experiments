import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import RocketDataGrid from '../components/RocketDataGrid'

describe('components/rocket-datagrid', () => {
  const renderComponent = () => render(<RocketDataGrid />)

  it('should return true', () => {
    renderComponent()
    expect(1).toEqual(1)
  })
})
