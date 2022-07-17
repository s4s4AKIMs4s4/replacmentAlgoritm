import '@testing-library/jest-dom'
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import * as React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import HiddenMessage from '../App'

test('shows the children when the checkbox is checked', () => {
  const testMessage = 'Test Message'
  render(<HiddenMessage/>)
  expect(screen.queryByText(testMessage)).toBeNull()
  fireEvent.click(screen.getByText(/hellow/i))
  expect(screen.getByText(/hellow/i)).toBeInTheDocument()
})