import path from 'path';

import type { StorybookConfig } from '@storybook/react-webpack5';
import { DefinePlugin, RuleSetRule } from 'webpack';

const paths = {
  public: path.resolve(__dirname, '..', '..', 'public'),
  src: path.resolve(__dirname, '..', '..', 'src'),
  node_modules: path.resolve(__dirname, '..', '..', 'node_modules'),
};

const config: StorybookConfig = {
  stories: [`${paths.src}/**/*.stories.@(js|jsx|mjs|ts|tsx)`],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    'storybook-addon-mock',
  ],
  core: {
    disableTelemetry: true,
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  staticDirs: [paths.public],
  swc: {
    jsc: {
      transform: {
        react: {
          runtime: 'automatic',
        },
      },
    },
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config) => {
    const mode = config.mode || 'development';
    const isDev = mode === 'development';

    config.resolve!.modules = [paths.src, paths.node_modules];
    config.resolve!.extensions!.push('.ts', '.tsx');
    config.resolve!.alias = {
      ...config!.resolve!.alias,
      '@': paths.src,
    };

    // @ts-ignore
    config.module!.rules = config.module!.rules!.map((rule: RuleSetRule) => {
      if (/svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i };
      }

      return rule;
    });

    config.module!.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    config.module!.rules.push({
      test: /\.s[ac]ss$/i,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              auto: (resourcePath: string) => resourcePath.includes('.module.'),
              localIdentName: isDev ? '[name]__[local]' : '[hash:base64:8]',
            },
          },
        },
        'sass-loader',
      ],
    });

    config.plugins!.push(
      new DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify('http://localhost:8000'),
        __PROJECT__: JSON.stringify('storybook'),
      }),
    );

    return config;
  },
};

export default config;
