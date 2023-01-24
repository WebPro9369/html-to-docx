module.exports = {
  resolve: {
    fallback: {
      fs: false,
      path: false,
      zlib: false,
      http: false,
      https: false,
      // stream: false,
      crypto: false,
      assert: false,
      // tls: false,
      // net: false,
      // path: require.resolve('path-browserify'),
      // zlib: require.resolve('browserify-zlib'),
      // http: require.resolve('stream-http'),
      // https: require.resolve('https-browserify'),
      stream: require.resolve('stream-browserify'),
      // crypto: require.resolve('crypto-browserify'),
      // assert: require.resolve('assert-browserify'),
    },
  },
  optimization: {},
};
