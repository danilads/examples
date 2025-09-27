## 1) Test - yarn live / yarn build / yarn storybook / yarn build-storybook  

## 2) node -v ---> v22.11.0  

## 3) install packages ---> use yarn (install it globally) instead of npm  

## 4) how run './dist' or './storybook-static' (builded projects) - need to use lite-server  
    npx http-server ./dist  
    npx http-server ./storybook-static  

## 5) [structure] primitives -> components -> pages  
    assets - use it for storing files, images, fonts, PDFs, and more.  
    components - these are complex components consisting of primitives and more.  
    pages - these are pages that we open through the router.  
    primitives - the simplest parts of the project. (don't use redux in 'pimitives')  
    store - redux store (recomend to use Redux DevTools pluggin in chrome)  
    styles - global styles  
    svg - svg icons  

## 6) imports added in 'vite.config.ts' 'tsconfig.json'  
    used imports:  
        "assets/*": ["assets/*"],  
        "components/*": ["components/*"],  
        "pages/*": ["pages/*"],  
        "primitives/*": ["primitives/*"],  
        "store/*": ["store/*"],  
        "styles/*": ["styles/*"],  
        "svg/*": ["svg/*"]  


