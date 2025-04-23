const { Pool } = require('pg');
 
/**
 * JS Connector for PostgreSQL
 * @author Tristan Rush
 */

/**
 * Creates a psql pool
 * @precondition A .env file must exist with the following args
 * @env PGUSER, PGPASSWORD, PGHOST, PGPORT, PGDATABASE
 */
const pool = new Pool({
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})

export default pool