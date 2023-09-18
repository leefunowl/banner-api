var jwt = require("jsonwebtoken")
var bcrypt = require("bcryptjs")
//------
const db = require("../models")
var c = require('../../config')
//------
const User = db.user
const Role = db.role

exports.signin = (req, res) => {
  User.findOne({
    where: {
      username: req.body.username
    }
  })
    .then(user => {
      // handle for username not found
      if (!user) {
        return res.status(404).send({ message: "User Not found." })
      }

      // compare passwords
      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      )

      // handle for invalid password
      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        })
      }

      // if username and password match, assign token and roles
      var token = jwt.sign({ id: user.id }, c.lsd_jwt_key, {
        expiresIn: c.TokenExpireTime
      })

      var authorities = []
      user.getRoles().then(roles => {
        for (let i = 0; i < roles.length; i++) {
          // assign roles
          authorities.push("ROLE_" + roles[i].name.toUpperCase())
        }
        res.status(200).send({
          id: user.id,
          username: user.username,
          email: user.email,
          roles: authorities,
          accessToken: token
        })
      })
    })
    .catch(err => {
      res.status(500).send({ message: err.message })
    })
}

exports.signup = (req, res) => {
  // Save User to Database
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  })
    .then(user => {
      if (req.body.roles) {
        Role.findAll({
          where: {
            name: {
              [Op.or]: req.body.roles
            }
          }
        }).then(roles => {
          user.setRoles(roles).then(() => {
            res.send({ message: "User registered successfully!" })
          })
        })
      } else {
        // user role = 1
        user.setRoles([1]).then(() => {
          res.send({ message: "User registered successfully!" })
        })
      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message })
    })
}
