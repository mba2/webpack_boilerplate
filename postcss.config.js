module.exports = (ctx) => ({
    plugins: {
        // 'postcss-import': {},
        'postcss-cssnext': {},
        "cssnano" : ctx.env === 'production' ? {} : false
    }
  })