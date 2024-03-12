import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';

import { StoreProvider } from 'app/providers/StoreProvider';
import { StoreSchema } from 'app/providers/StoreProvider/types/storeSchema';

import i18nForTests from '../../config/i18n/i18nForTests';

interface IComponentRenderOptions {
  route?: string;
  initialState?: DeepPartial<StoreSchema>;
}

export const renderComponent = (component: ReactNode, options: IComponentRenderOptions = {}) => {
  const { route = '/', initialState } = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider initialState={initialState as StoreSchema}>
        <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
      </StoreProvider>
    </MemoryRouter>,
  );
};
