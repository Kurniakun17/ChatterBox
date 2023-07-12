/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { cleanup, render, screen } from '@testing-library/react';
import {
  afterEach, describe, expect, it, vi
} from 'vitest';
import matchers from '@testing-library/jest-dom/matchers';
import userEvent from '@testing-library/user-event';
import { LoginInput } from './LoginInput';

expect.extend(matchers);

describe('LoginInput Component Test', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should post a correct data when login button clicked', async () => {
    const mockLoginHandler = vi.fn();
    render(<LoginInput onLoginHandler={mockLoginHandler} />);

    const emailInput = await screen.getByPlaceholderText('EMAIL');
    await userEvent.type(emailInput, 'Takayan');

    const passwordInput = await screen.getByPlaceholderText('PASSWORD');
    await userEvent.type(passwordInput, 'Gatito123');

    const loginButton = await screen.getAllByText('LOG IN');

    await userEvent.click(loginButton[0]);

    expect(mockLoginHandler).toHaveBeenCalledWith('Takayan', 'Gatito123');
  });
});
