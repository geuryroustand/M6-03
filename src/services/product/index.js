import express from "express";

import db from "../../db/models/allfiles.js";

const productRouter = express.Router();
const { product, category } = db;

productRouter
  .post("/", async (req, res, next) => {
    try {
      const data = await product.create(req.body);

      res.send(data);
    } catch (error) {
      next(error);
    }
  })
  .get("/", async (req, res, next) => {
    try {
      const data = await product.findAll({
        include: category,
      });
      res.send(data);
    } catch (error) {
      next(error);
    }
  })

  .get("/:id", async (req, res, next) => {
    try {
      const data = await product.findByPk(req.params.id, {
        include: category,
      });
      if (data === null) {
        res.status(404).send("Not found");
      } else {
        res.send(data);
      }
    } catch (error) {
      next(error);
    }
  })
  .put("/:id", async (req, res, next) => {
    try {
      const data = await product.update(req.body, {
        where: {
          id: req.params.id,
        },
        returning: true,
      });
      res.send(data[1][0]);
    } catch (error) {
      next(error);
    }
  })
  .delete("/:id", async (req, res, next) => {
    try {
      const data = await product.destroy({
        where: {
          id: req.params.id,
        },
      });

      if (data > 0) {
        res.send("OK Deleted");
      } else {
        res.status(404).send("Not found");
      }
    } catch (error) {
      next(error);
    }
  });

export default productRouter;

//  {}
