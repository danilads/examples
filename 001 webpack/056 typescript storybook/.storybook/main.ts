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
        assets: path.resolve(__dirname, '../src/assets'),
        components: path.resolve(__dirname, '../src/components'),
        pages: path.resolve(__dirname, '../src/pages'),
        primitives: path.resolve(__dirname, '../src/primitives'),
        store: path.resolve(__dirname, '../src/store'),
        styles: path.resolve(__dirname, '../src/styles'),
        svg: path.resolve(__dirname, '../src/svg'),
        
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
              @use "styles/global.scss" as *;
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