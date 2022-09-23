import React from 'react'
import RocketDataGrid from '../components/rocket-datagrid'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

describe('components/rocket-datagrid', () => {
  const renderComponent = () => {
    return render(<RocketDataGrid />)
  }

  it('should return true', () => {
    renderComponent()
    expect(1).toEqual(1)
  })
})
