import React from 'react';
import Counter from '../Counter';
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";

test('checking initial value', () => {
    const initialCount = 3;
    render(<Counter initialCount={initialCount} />);
    expect(screen.getByText(`Counter: ${initialCount}`)).toBeInTheDocument();
});

test('decrementing the value', () => {
    const initialCount = 3;
    render(<Counter initialCount={initialCount} />);
    userEvent.click(screen.getByRole('button', { name: "-" }));
    expect(screen.getByText(`Counter: ${initialCount - 1}`)).toBeInTheDocument();
});

test('incrementing the value', () => {
    const initialCount = 3;
    render(<Counter initialCount={initialCount} />);
    userEvent.click(screen.getByRole('button', { name: "+" }));
    expect(screen.getByText(`Counter: ${initialCount + 1}`)).toBeInTheDocument();
});
