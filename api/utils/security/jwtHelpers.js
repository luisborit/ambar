const jwt = require('jsonwebtoken')
require('dotenv').config()

const signToken = (req, res, next) => {
  jwt.sign(req.body.user, process.env.SECRET, { expiresIn: '7h' }, (err, token) => {
    if (err) {
      res.sendStatus(403)
    }
    res.json({
      token
    })
  }
  )
}

const verifyToken = (req, res, next) => {
  jwt.verify(req.headers.authorization.split(' ')[1], process.env.SECRET, (err, decoded) => {
    if (err) {
      res.sendStatus(403)
    } else {
      next()
    }
  }
  )
}

const verifyTokenExistance = (req, res, next) => {
  const bearerHeader = req.headers.authorization
  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ')
    const bearerToken = bearer[1]
    req.token = bearerToken
    next()
  } else {
    res.sendStatus(403)
  }
}

module.exports = {
  signToken,
  verifyToken,
  verifyTokenExistance
}
