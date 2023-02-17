import jsdom from '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react';
import App from './App';
import TodoInput from './components/TodoInput';

// jest.mock('../SomeDirectory/SomeComponent', () => 'SomeComponent');

/**
 * @jest-environment jsdom
 */
test('renders without crashing', () => {
  const div = document.createElement('div');
  render(<App />, div);
});

/**
 * @jest-environment jsdom
 */
describe('show input fields', () => {
  test('task input field', () => {
    render(<TodoInput onValue='' />);
    expect(screen.getByLabelText('Description:')).toBeVisible();
  });

  test('task input field', async () => {
    const user = userEvent.setup();
    render(<TodoInput onValue='' />);
    await user.click(screen.getByText('Add'));
    //expect(screen.getByLabelText('Description:')).toBeVisible();
  });
});
