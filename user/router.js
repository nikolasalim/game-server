const { Router } = require("express");
const User = require("./model");
const bcrypt = require("bcrypt");

const router = new Router();

// router.get("/", (req, res) => res.send("IM WORKING"));

router.post("/user", (req, res, next) => {
  console.log("request is", req.body);
  const user = {
    name: req.body.name,
    password: bcrypt.hashSync(req.body.password, 10)
  };
  User.create(user)
    .then(user => res.status(201).send(user))
    .catch(next);
});

module.exports = router;
