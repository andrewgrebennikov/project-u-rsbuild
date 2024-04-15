import { render, screen } from '@testing-library/react';

import { Button, ButtonVariant } from '../Button/Button';

describe('Button', () => {
  test('render button', () => {
    render(<Button>Test button</Button>);
    expect(screen.getByText('Test button')).toBeInTheDocument();
  });

  test('render contained button', () => {
    render(<Button variant={ButtonVariant.CONTAINED}>Test button</Button>);
    expect(screen.getByTestId('button')).toHaveClass(ButtonVariant.CONTAINED);
  });

  test('render outlined button', () => {
    render(<Button variant={ButtonVariant.OUTLINED}>Test button</Button>);
    expect(screen.getByTestId('button')).toHaveClass(ButtonVariant.OUTLINED);
  });
});
