import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App Component', () => {
    it('should render the initial count', () => {
        render(<App />)
        expect(screen.getByText('count is 0')).toBeInTheDocument()
    })

    it('should increment the count when the button is clicked', async () => {
        render(<App />)
        const button = screen.getByRole('button', { name: 'count is 0' })

        const user = userEvent.setup()
        await user.click(button)

        expect(screen.getByText('count is 1')).toBeInTheDocument()
    })
})
