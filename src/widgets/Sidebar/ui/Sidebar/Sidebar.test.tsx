import { screen } from '@testing-library/react';

import { renderComponent } from '@/shared/lib/tests/renderComponent';

import { Sidebar } from '../Sidebar/Sidebar';

describe('Sidebar', () => {
  test('render sidebar', () => {
    renderComponent(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
});
