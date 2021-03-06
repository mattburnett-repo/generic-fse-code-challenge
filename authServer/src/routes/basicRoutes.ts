
var router = require('express').Router()

var User = require('../../db/model/user.model')

var passport = require("passport")
var { useBasicLocal }  = require('../loaders/passportLoader')

var jwt = require('jsonwebtoken')
var { generateJwt } = require('../util/functions')

module.exports = (app: any) => {
    useBasicLocal()

    app.use('/auth/basic', router)

    router.post('/register', async (req: any, res: any) => {
        // check first if username already exists
        const currentUser = await User.findOne({ username: req.body.username })

        if(currentUser) {
            res.json({"error": `User ${currentUser.username} already exists`})
        } else {
            try {
                const user = await User.create({ username: req.body.username, password: req.body.password, source: 'basicLocal' })
        
                //  After successful create, log user in. Log in redirects to app-surface
                req.login(user, function (err: Error) {
                    if (!err){
                        // 307 lets us redirect to the route in the codw below this one, as POST and not the default GET
                        //      this logs new user in, generates a JWT and redirects to the app-surface endpoint
                        res.redirect(307, '/auth/basic/login/passport')
                    } else {
                        res.json({"error": err})
                    }
                })
            } catch (error) {
                res.json({"error": error})
            }                    
        }
    })

    // Passport JS

    // https://www.digitalocean.com/community/tutorials/api-authentication-with-json-web-tokensjwt-and-passport
    //      Step 5 usw
    router.post( 
        "/login/passport",
        passport.authenticate("basicLocal", { 
            session: false ,
        }),
        (req: any, res: any, next: Function) => {
            const authToken = generateJwt(req)
            res.json({"authToken": authToken})
        }
    )

    // TODO: here is a path towards sending custom messages back to the client, via built-in callbacks
    //      For now it's a time sink, so we are moving on, using '/login/passport' above
    //  https://stackoverflow.com/questions/15711127/express-passport-node-js-error-handling#15711502
    // router.post('/login/test', function(req: any, res: any, next: Function) {
    //     passport.authenticate('basicLocal', {
    //         session: false 
    //     },
    //     (err: Error, user: Object, options: any, info: any) => {
    //         if (err) {
    //             return next(err); // will generate a 500 error
    //         }
    //         // Generate a JSON response reflecting authentication status
    //         if (! user) {
    //             console.log('options ', options)
    //             return res.send(401,{ success : false, message : options.message });
    //         }
    //         //   req.login(user, function(err: Error){
    //         //     if(err){
    //         //       return next(err);
    //         //     }

    //         const authToken = generateJwt(req)
    //         res.json({"authToken": authToken})
    //         // return res.send({ success : true, message : 'authentication succeeded' });        
    //     //   });
    //     })(req, res, next);
    // });
} // end module.exports