import { RuleSetRule, Configuration, DefinePlugin } from 'webpack';

export default ({ config }: { config: Configuration }) => {
  const isDev = config.mode === 'development';

  config.plugins!.push(
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(true),
      __API__: JSON.stringify('http://localhost:8000'),
      __PROJECT__: JSON.stringify('storybook'),
    }),
  );

  config.resolve!.modules = ['../../src', 'node_modules'];
  config.resolve!.extensions!.push('.ts', '.tsx');

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

  return config;
};
