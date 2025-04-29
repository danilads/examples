import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  webpackFinal: async (config) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...(config.resolve?.alias || {}),
        styles: path.resolve(__dirname, '../src/styles'),
        assets: path.resolve(__dirname, '../src/assets'),
      },
      extensions: [
        ...(config.resolve?.extensions || []),
        '.ts', '.tsx', '.js', '.jsx',
      ],
    };
  
    const tsRule = {
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      ],
      exclude: /node_modules/,
    };
  
    const scssRule = {
      test: /\.s[ac]ss$/i,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            additionalData: `
              @use "styles/variables.scss" as *;
              @use "styles/breakpoints.scss" as *;
            `,
            sassOptions: {
              includePaths: [path.resolve(__dirname, '../src/styles')],
            },
          },
        }
      ],
    };
  
    const assetRule = {
      test: /\.(png|jpe?g|gif|svg|eot|ttf|woff2?|otf)$/i,
      type: 'asset/resource',
    };
  
    config.module = {
      ...config.module,
      rules: [
        ...(config.module?.rules || []),
        tsRule,
        scssRule,
        assetRule,
      ],
    };
  
    return config;
  }
};

export default config;