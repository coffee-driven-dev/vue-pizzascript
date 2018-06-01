module.exports = {
  configureWebpack: {
    // Set up all the aliases we use in our app.
    resolve: {
      alias: require('./aliases.config').webpack
    }
  },
  css: {
    // Enable CSS source maps.
    sourceMap: true
  }
}
