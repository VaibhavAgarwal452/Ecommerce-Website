import bycrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin USer',
    email: 'admin@example.com',
    password: bycrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Vaibhav Agarwal',
    email: 'vaibhav@example.com',
    password: bycrypt.hashSync('123456', 10),
  },
  {
    name: 'Saurabh',
    email: 'saurabh@example.com',
    password: bycrypt.hashSync('123456', 10),
  },
  {
    name: 'Rangbaaz',
    email: 'rangbaaz@example.com',
    password: bycrypt.hashSync('123456', 10),
  },
];

export default users;
