import { render, screen } from '@testing-library/react';
import BookingPage from './BookingPage';
test('renders text', () => {
    render(<BookingPage />);
    const date = screen.getByText('Date');
    expect(date).toBeInTheDocument();
});
