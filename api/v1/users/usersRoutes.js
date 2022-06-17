
const router = require('express').Router()
const { verifyTokenExistance, verifyToken, signToken } = require('../../utils/security/jwtHelpers')
require('dotenv').config()

router.post('/login', (req, res) => {
  const user = {
    username: req.body.username
  }
  signToken(user)
})

router.get('/status', verifyTokenExistance, verifyToken, (req, res) => {
  res.json({ 200: 'OK' })
})

module.exports = router
