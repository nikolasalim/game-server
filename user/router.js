const { Router } = require("express");
const User = require("./model");
const bcrypt = require("bcrypt");
const { ToJwt } = require("../auth/jwt");

const router = new Router();

router.post("/user", (req, res, next) => {
  console.log("request is", req.body);
  const user = {
    name: req.body.name,
    password: bcrypt.hashSync(req.body.password, 10)
  };
  User.create(user)
    .then(user => res.status(201).send({ jwt: ToJwt({ userId: user.id }) }))
    .catch(next);
});

module.exports = router;
