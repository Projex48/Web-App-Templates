import { MongoClient } from 'mongodb';

/**
 * MongoDB connector for Node.Js.
 * @author Tristan Rush
 */
class MongoDBClient {
  /**
   * Constructor for the MongoDB connector
   * @param uri The uri to connect to the database with
   * @param dbName The name of the database to connect to
   */
  constructor(uri, dbName) {
    this.client = new MongoClient(uri);
    this.dbName = dbName;
  }

  /**
   * Connects to the database
   */
  async connect() {
    await this.client.connect();
    this.db = this.client.db(this.dbName);
  }

  /**
   * Gets a specified collection
   * @param name the name of the collection to return
   * @returns {*} the collection specified
   */
  getCollection(name) {
    return this.db.collection(name);
  }

  /**
   * Disconnects from the MongoDB database
   */
  async disconnect() {
    await this.client.close();
  }
}

export default MongoDBClient;