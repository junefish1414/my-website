module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/my-website/' // test20200915 為 repo 名稱
    : '/'
}
