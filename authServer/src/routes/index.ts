
const basicRouter = require('./basicRoutes.ts');
const oAuthRouter = require('./oAuthRoutes.ts')

const { initializePassport } = require('../loaders/passportLoader')

module.exports = (app: any) => {
    initializePassport(app)
    basicRouter(app)
    oAuthRouter(app)
}