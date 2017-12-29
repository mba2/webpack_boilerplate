module.exports = (context) => ({
    plugins: {
        // 'postcss-import': {},
        'postcss-cssnext': {},
        "cssnano" : context.env === 'production' ? { autoprefixer : false } : false
    }
  })