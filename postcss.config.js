module.exports = {
  plugins: {
    'autoprefixer': {},
    'postcss-px-to-viewport': {
        unitToConvert: 'px',
        viewportWidth: 320,
        unitPrecision: 5,
        propList: ['*'],
        viewportUnit: 'vw',
        fontViewportUnit: 'vw',
        selectorBlackList: ['ignore', 'tabbar', 'leftScroll'],
        minPixelValue: 1,
        mediaQuery: false,
        replace: true,
        exclude: [/node_modules/],
        include: undefined,
        landscape: false,
        landscapeUnit: 'vw',
        landscapeWidth: 568
    }
  }
}