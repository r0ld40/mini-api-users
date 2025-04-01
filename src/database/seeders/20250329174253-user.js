const bcrypt = require('bcryptjs');

module.exports = {
  async up(QueryInterface) {
    return QueryInterface.bulkInsert(
      'users',
      [
        {
          name: 'John Doe',
          email: 'Q2w8K@example.com',
          date_birth: '2000-01-01',
          password_hash: bcrypt.hashSync('123456', 8),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      []
    );
  },

  async down() {},
};
