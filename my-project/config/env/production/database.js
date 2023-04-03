module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("PGHOST", "containers-us-west-xxx.railway.app"),
      port: env.int("PGPORT", "6xx4"),
      database: env("PGDATABASE", "railway"),
      user: env("PGUSER", "postgres"),
      password: env("PGPASSWORD", "password"),
      ssl: env.bool(true),
    },
  },
});
