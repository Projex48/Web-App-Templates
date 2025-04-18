import { Pool } from 'pg';

/**
 * PostgreSQL connector for Node.js.
 * @author Tristan Rush
 */
class PostgresClient {
  /**
   * Constructor for the PostgreSQL database connector
   * @param pgUser The user to connect with
   * @param pgHost The host to connect to
   * @param pgDatabase The database name to connect to
   * @param pgPassword The password for the user
   * @param pgPort The port to connect to the database through
   */
  constructor(pgUser, pgHost, pgDatabase, pgPassword, pgPort) {
    this.pool = new Pool({
      user: pgUser,
      host: pgHost,
      databse: pgDatabase,
      password: pgPassword,
      port: pgPort || 5432,
    });
  }

  /**
   * Queries the pSQL database.
   * @param sql The query to execute, parameters must use through placeholders
   * @param params Params for the query, must be provided in an array
   * @returns {Promise<*>} A promise for the result of the query process
   * @throws {Error} If params are not provided in an array
   */
  async query(sql, params = []) {
    if (!Array.isArray(params)) {
      throw new Error('Params must be an array to avoid SQL injection risks.');
    }
    return this.pool.query(sql, params);
  }

  /**
   * Disconnects from the database
   */
  async disconnect() {
    await this.pool.end();
  }
}

export default PostgresClient;