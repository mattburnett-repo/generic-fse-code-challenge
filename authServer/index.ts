
if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const app = require('./src/server.ts')

const AUTH_PORT = process.env.AUTH_PORT || 4500;

app.listen(AUTH_PORT, () => {
  console.log(`Auth Server listening on port ${AUTH_PORT}`)
})

module.exports = app;