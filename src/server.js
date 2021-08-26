import express from "express";
import dbConection from "./db/models/allfiles.js";
import cors from "cors";
import categoryRouter from "./services/category/index.js";
import productRouter from "./services/product/index.js";

const server = express();
const port = process.env.PORT;

console.log(port);
server.use(cors());

server.use(express.json());

server.use("/category", categoryRouter);
server.use("/product", productRouter);

dbConection.sequelize
  .sync()
  .then(() => {
    server.listen(port, () => {
      console.log(" ✔ Server running");
    });

    server.on("error", (error) =>
      console.log(" 🎇 Server is crashe due to ", error)
    );
  })
  .catch((e) => console.log(e));

// server.listen(port, () => {
//   console.log(" ✔ Server running");
// });

// server.on("error", (error) =>
//   console.log(" 🎇 Server is crashe due to ", error)
// );
