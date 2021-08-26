import sequelize from "../dbconection.js";

import ty from "sequelize";

const { DataTypes } = ty;

const product = sequelize.define("product", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  image: {
    type: DataTypes.TEXT,
  },
});

export default product;
