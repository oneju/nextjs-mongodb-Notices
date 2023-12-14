import { Mongoose, connect } from "mongoose";

const { DB_URL, DB_NAME } = process.env;

if (!DB_URL) {
  throw new Error("DB_URL must be defined");
}

let _dbConnCache: Mongoose | null = null;

export const connectDb = async () => {
  try {
    if (_dbConnCache) {
      return _dbConnCache;
    }

    _dbConnCache = await connect(DB_URL, {
      dbName: DB_NAME,
    });
    console.log("connected");
    return _dbConnCache;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
