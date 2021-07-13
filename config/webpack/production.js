process.env.NODE_ENV = process.env.NODE_ENV || 'production'

const environment = require('./environment')

module.exports = environment.toWebpackConfig()

if (process.env.NODE_ENV) {
  app.use(express.static(path.resolve(process.cwd(), 'client/build')))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(process.cwd(), 'client/build/index.html'))
  })
}
