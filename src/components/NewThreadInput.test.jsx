/* eslint-disable react/react-in-jsx-scope */
import { cleanup, render, screen } from '@testing-library/react';
import {
  afterEach, describe, expect, it, vi
} from 'vitest';
import matchers from '@testing-library/jest-dom/matchers';
import userEvent from '@testing-library/user-event';
import { NewThreadInput } from './NewThreadInput';

expect.extend(matchers);

/**
* test scenario for NewThreadInput
*
* - NewThreadInput component
*  - Should post a correct data when post button clicked
*/

describe('NewthreadInput Component Test', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should post a correct data when post button clicked', async () => {
    const mockPostHandler = vi.fn();
    render(<NewThreadInput onPostHandler={mockPostHandler} />);

    const titleInput = await screen.getByPlaceholderText('TITLE');
    await userEvent.type(titleInput, 'Dumb me who fell into love');

    const categoryInput = await screen.getByPlaceholderText('CATEGORY');
    await userEvent.type(categoryInput, 'Music');

    const bodyInput = await screen.getByPlaceholderText('BODY');
    await userEvent.type(bodyInput, 'Takayan song');

    const postButton = await screen.getAllByText('POST');

    await userEvent.click(postButton[0]);

    expect(mockPostHandler).toHaveBeenCalledWith({
      title: 'Dumb me who fell into love',
      category: 'Music',
      body: 'Takayan song',
    });
  });
});
