import { render, screen } from '@testing-library/react';
import BookingPage from './BookingPage';
test('renders text', () => {
    render(<BookingPage />);
    const date = screen.getByText('Date');
    expect(date).toBeInTheDocument();
});

import { initializeTimes, updateTimes } from "./BookingPage";

const expectedTimes = [
    "17:00",
    "17:30",
    "20:00",
    "20:30",
    "22:30",
    "23:00",
    "23:30",
];

test("Initializes the correct times", () => {
    expect(initializeTimes().availableTimes.length).toBeGreaterThan(0);
});

test("Updates based on state", () => {
    expect(updateTimes({}, { type: "UPDATE_TIMES", payload: new Date("4/7/2023") }).availableTimes.length).toBeGreaterThan(0);
});
