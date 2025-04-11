module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  port: '5432',
  username: 'joao',
  password: '1234',
  database: 'users',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
