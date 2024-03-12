import { render, screen } from '@testing-library/react';

import { renderWithTranslation } from '../../lib/tests/renderWithTranslation';
import { Button, ButtonVariant } from '../Button/Button';

describe('Button', () => {
  test('render button', () => {
    renderWithTranslation(<Button>Test button</Button>);
    expect(screen.getByText('Test button')).toBeInTheDocument();
  });

  test('render contained button', () => {
    render(<Button variant={ButtonVariant.CONTAINED}>Test button</Button>);
    expect(screen.getByText('Test button')).toHaveClass('contained');
  });

  test('render outlined button', () => {
    render(<Button variant={ButtonVariant.OUTLINED}>Test button</Button>);
    expect(screen.getByText('Test button')).toHaveClass('outlined');
  });
});
