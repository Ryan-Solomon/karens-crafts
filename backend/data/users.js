import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin1@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Non Admin User 1',
    email: bcrypt.hashSync('123456', 10),
    password: xxxx,
  },
  {
    name: 'Non Admin User 2',
    email: bcrypt.hashSync('123456', 10),
    password: xxxx,
  },
];

export default users;
