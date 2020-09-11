const { v4 } = require("uuid");

const users = [
  {
    id: v4(),
    nome: "Michelle",
    email: "michelle.nunes10@gmail.com",
    username: "michelleromao",
    picpay: "@michelleromao",
  },
];

module.exports = users;
