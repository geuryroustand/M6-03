import sequelize from "../dbconection.js";

import ty from "sequelize";

const { DataTypes } = ty;

const category = sequelize.define("category", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },

  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default category;
