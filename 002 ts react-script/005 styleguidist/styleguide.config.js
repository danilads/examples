module.exports = {
  defaultExample: true,
  propsParser: require('react-docgen-typescript').withCustomConfig('./tsconfig.json', { propFilter: { skipPropsWithoutDoc: true } }).parse,
  template: {
      head: {
          links: [
              {
                  rel: 'stylesheet',
                  href: 'public/fonts/fonts.css'
              }
          ]
      }
  },
  theme: {
      fontFamily: {
          base: 'Roboto'
      }
  },
  styles: {
      StyleGuide: {
          '@global body': {
              fontFamily: 'Roboto'
          }
      }
  }
};