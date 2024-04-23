import { screen } from '@testing-library/react';

import { renderComponent } from '@/shared/lib/tests/renderComponent';

import { PageError } from './PageError';

describe('PageError', () => {
  test('render page error', () => {
    renderComponent(<PageError />);
    expect(screen.getByTestId('page-error')).toBeInTheDocument();
  });
});
