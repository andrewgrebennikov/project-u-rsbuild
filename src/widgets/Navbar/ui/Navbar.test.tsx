import { screen } from '@testing-library/react';

import { renderComponent } from '@/shared/lib/tests/renderComponent';

import { Navbar } from './Navbar';

describe('Navbar', () => {
  test('render navbar', () => {
    renderComponent(<Navbar />);
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
  });
});
