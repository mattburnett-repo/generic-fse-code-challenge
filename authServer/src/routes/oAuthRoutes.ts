
var express = require('express');
var router = express.Router();

var passport = require("passport")
var { oauthGoogle, oauthGithub } = require('../loaders/passportLoader')
var jwt = require('jsonwebtoken')

var { generateJwt } = require('../util/functions')

module.exports = (app: any) => {
    oauthGoogle()
    oauthGithub()

    app.use('/auth/oauth', router)

    // GOOGLE
    router.get('/google', passport.authenticate('oauthGoogle', 
        { session: false, scope: ['profile', 'email'] })
    )
    router.get('/google/redirect', passport.authenticate('oauthGoogle', 
        {   session: false,
            // successRedirect: process.env.CLIENT_URL + '/dashboard',
        }),
        (req: any, res: any) => {
            const authToken = generateJwt(req)
            res.header('Authorization', `Bearer  ${authToken}`)
            res.send('Sent auth header')

            // obvs this doesn't work, but it's the general idea.
            //      somehow, send the jwt back to something on the client
            //          that will get passed to setUser()
            //      this will satisfy auth requirement of the app and we can
            //          then continue along our way

            // res.redirect(process.env.CLIENT_URL + '/dashboard')
            // res.json({"authToken": authToken})
        }
    )

    // GITHUB
    router.get('/github', passport.authenticate('oauthGithub', { scope: [ 'user:email' ] }))
    router.get('/github/callback', passport.authenticate('oauthGithub', 
        { session: false }
        ),
        (req: any, res: any) => {
            const authToken = generateJwt(req)

            res.json({"authToken": authToken})
    })
} // end module.exports