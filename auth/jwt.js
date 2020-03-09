const jwt = require("jsonwebtoken");

const secret =
  process.env.JWT_SECRET || "e9rp^&^*&@9sejg)DSUA)jpfds8394jdsfn,m";

function ToJwt(data) {
  return jwt.sign(data, secret, { expiresIn: "2h" });
}

function ToData(token) {
  return jwt.verify(token, secret);
}

module.exports = { ToJwt, ToData };
