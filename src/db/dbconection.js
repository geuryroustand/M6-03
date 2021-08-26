import { Sequelize } from "sequelize";

const { PGPORT, PGHOST, PGUSER, PGDATABASE, PGPASSWORD } = process.env;
// const { database, username, password, hostdb, portdb } = process.env;

// console.log("==============", PGPORT, PGHOST, PGUSER, PGDATABASE, PGPASSWORD);
const sequelize = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
  host: PGHOST,
  port: PGPORT,
  dialect: "postgres",
});

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

testConnection();

export default sequelize;
