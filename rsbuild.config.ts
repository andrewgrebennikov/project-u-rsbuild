import path from 'path';

import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSvgr } from '@rsbuild/plugin-svgr';

export default defineConfig(({ envMode }) => {
  const isDev = envMode === 'development';
  const project = 'frontend';

  return {
    plugins: [pluginReact(), pluginSvgr({ svgDefaultExport: 'component' })],
    html: {
      template: path.resolve(__dirname, 'public', 'index.html'),
    },
    source: {
      define: {
        __API__: JSON.stringify(process.env.API_URL),
        __IS_DEV__: JSON.stringify(isDev),
        __PROJECT__: JSON.stringify(project),
      },
    },
  };
});
