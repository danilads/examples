## 1) Test - yarn live / yarn build / yarn storybook / yarn build-storybook

## 2) node -v ---> v22.11.0

## 3) install packages ---> use yarn (install it globally) instead of npm

## 4) how run './dist' or './storybook-static' (builded projects) - need to use lite-server

    npx http-server ./dist
    npx http-server ./storybook-static

## 5) [structure] components -> pages

    assets - use it for storing files, images, fonts, PDFs, and more.
    components - basic components
    pages - these are pages that we open through the router.
    store - redux store (recomend to use Redux DevTools pluggin in chrome)
    styles - global styles
    svg - svg icons

## 6) imports added in 'vite.config.ts' 'tsconfig.json'

    used imports:
        "assets/*": ["assets/*"],
        "components/*": ["components/*"],
        "pages/*": ["pages/*"],
        "store/*": ["store/*"],
        "styles/*": ["styles/*"],
        "svg/*": ["svg/*"]

## 7) router - ./src/main.tsx
