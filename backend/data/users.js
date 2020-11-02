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
    email: 'admin2@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Non Admin User 2',
    email: 'admin3@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
