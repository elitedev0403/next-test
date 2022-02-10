import { render, screen } from '@testing-library/react'
import Layout from '../components/Layout'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Layout />)

    expect(screen.getByText('Homes')).toBeInTheDocument();
  })
})