import path from 'path';

import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSvgr } from '@rsbuild/plugin-svgr';
import { pluginTypeCheck } from '@rsbuild/plugin-type-check';
import { RsdoctorRspackPlugin } from '@rsdoctor/rspack-plugin';

export default defineConfig(({ envMode }) => {
  const isDev = envMode === 'development';
  const project = 'frontend';

  return {
    plugins: [
      pluginReact(),
      pluginSvgr({
        svgrOptions: {
          exportType: 'default',
        },
      }),
      pluginTypeCheck(),
    ],
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
    tools: {
      rspack(_, { appendPlugins }) {
        if (process.env.RSDOCTOR === 'true') {
          appendPlugins(new RsdoctorRspackPlugin());
        }
      },
      swc: {
        jsc: {
          experimental: {
            plugins: [['@swc/plugin-react-remove-properties', {}]],
          },
        },
      },
    },
  };
});
