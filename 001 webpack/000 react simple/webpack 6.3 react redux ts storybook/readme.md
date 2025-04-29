
0) [node -v] - v22.11.0

1) [install] - yarn instead of npm

2) [how run ./dist or ./storybook-static (builded project) - need to use lite-server]
    [run - yarn build]
    [add this to ./dist or ./storybook-static "package.json" and run - yarn install / yarn live]
    
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