import sequelize from "../dbconection.js";
import category from "./category.js";
import product from "./product.js";

product.belongsTo(category, { onDelete: "cascade" });
category.hasMany(product, { onDelete: "cascade" });

export default { sequelize, product, category };
