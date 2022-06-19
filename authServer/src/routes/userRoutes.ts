
var router = require('express').Router()

var passport = require("passport")
var { useJwtAuthHeader }  = require('../loaders/passportLoader')

var User = require('../../db/model/user.model')

module.exports = (app: any) => {
    useJwtAuthHeader()

    app.use('/auth/user', router)

    router.get('/', 
        passport.authenticate('jwtAuthHeader', {
            session: false
        }),
        async (req: any, res: any) => {
            const users = await User.find()
            res.json({users})
        }
    )

    router.get('/:userId', async (req: any, res: any) => {
        const user = await User.findOne({_id: req.params.userId})
        res.json(user)
    })

    router.post('/', async (req: any, res: any) => {
        res.json(req.body)
    })
    router.patch('/:userId', async (req: any, res: any) => {
        res.json(req.body)
    })
    router.put('/:userId', async (req: any, res: any) => {
        res.json(req.body)
    })

    router.delete('/"userId', async (req: any, res: any) => {
        res.json(res.body)
    })
}