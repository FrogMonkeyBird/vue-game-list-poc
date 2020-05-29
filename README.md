# Vue Game List POC

Simple POC demonstrating the use of Vue and Webpack to build an interactive list of games as a Single Page Application (SPA).

## Build Setup

``` bash
# install NPM dependencies
npm install

# Serve app with hot reload at localhost:8080
npm run dev

# Build for production
npm run build
```

## Note on Detailes
- Make sure to mouse over both "regular" and "hot" games, to reveal the _different hover effects_.
- Is the brightness of the screen hurting your eyes? Turn on _Dark Mode_ to soften the glow ;).
- Responsize grid with fixed image ratio, to keep page from jumping when images are loaded.
- Responsive headings resize depending on the _vw_ (viewport width) values.

## File structure

Markup and Javascript are encapsulated within it's related component as an industry standard.
The styles are separated in scss-files and referenced within it's related component. The reason for this is mainly to take advantage of variables, mixins and functions shared between scss-files, but also to enforce _separation of concerns_.

## Future improvements

- Load data (games.json) with ajax/fetch from api, on a timed interval, to enable live updating jackpots etc.
- Improve size of Vue's production payload (the main.js for this kind of app should not be 1 Mb oO).
- Add sequential animation on games when loaded through Vue.
- Fix and enhance transition when games are opened in Game View.
- Lazy load images.
- ...
