## 1) Test - yarn live / yarn build / yarn storybook / yarn storybook-build  

## 2) node -v ---> v22.11.0  

## 3) install packages ---> use yarn (install it globally - npm install --global yarn) instead of npm  

## 4) how run './dist' or './storybook-static' (builded projects) - need to use lite-server  
    [run - yarn build]
    [add this to './dist' or './storybook-static' 'package.json' and run - yarn install, yarn live]  
    
    {  
        "name": "",  
        "version": "1.0.0",  
        "description": "",  
        "main": "index.html",  
        "scripts": {  
            "live": "lite-server"  
        },  
        "author": "",  
        "license": "ISC",  
        "devDependencies": {  
            "lite-server": "^2.6.1"  
        }  
    }  

## 5) [structure] primitives -> components -> pages  
    assets - use it for storing files, images, fonts, PDFs, and more.  
    components - these are complex components consisting of primitives and more.  
    pages - these are pages that we open through the router.  
    primitives - the simplest parts of the project. (don't use redux in 'pimitives')  
    store - redux store (recomend to use Redux DevTools pluggin in chrome)  
    styles - global styles  
    svg - svg icons  

## 6) to use assets (files) apply require('assets/download.jpeg')  

## 7) imports added in 'webpack/common.js' '.storybook/main.js' 'tsconfig.json'  
    used imports:  
        "assets/*": ["assets/*"],  
        "components/*": ["components/*"],  
        "pages/*": ["pages/*"],  
        "primitives/*": ["primitives/*"],  
        "store/*": ["store/*"],  
        "styles/*": ["styles/*"],  
        "svg/*": ["svg/*"]  


