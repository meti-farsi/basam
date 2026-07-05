const Validator = require("fastest-validator");

const v = new Validator();

const schema = {
  name: { type: "string", min: 3, max: 255 },
  username: { type: "string", min: 3, max: 255 },
  email: { type: "email", min: 3, max: 255 },
  phone: { type: "string", min: 3, max: 255 },
  password: { type: "string", min: 3, max: 255 },
  confirmPassword: { type: "equal", field: "password" },
  $$strict: true,
};

const check = v.compile(schema);

module.exports = check;