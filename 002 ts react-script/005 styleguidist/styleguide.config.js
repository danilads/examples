module.exports = {
  defaultExample: true,
  propsParser: require('react-docgen-typescript').withCustomConfig('./tsconfig.json', { propFilter: { skipPropsWithoutDoc: true } }).parse
};