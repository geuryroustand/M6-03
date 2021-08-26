import express from "express";

import allfiles from "../../db/models/allfiles.js";

const { category, product } = allfiles;

const categoryRouter = express.Router();

categoryRouter.get("/", async (req, res, next) => {
  try {
    const data = await category.findAll({
      include: product,
    });

    res.send(data);
  } catch (error) {
    next(error);
  }
});

categoryRouter.post("/", async (req, res, next) => {
  try {
    const data = await category.create(req.body);
    res.send(data);
  } catch (error) {
    next(error);
  }
});

categoryRouter.get("/:id", async (req, res, next) => {
  try {
    const data = await category.findByPk(req.params.id);
    res.send(data);
  } catch (error) {
    next(error);
  }
});

categoryRouter.delete("/:id", async (req, res, next) => {
  try {
    const rows = await category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (rows > 0) {
      res.send("Ok");
    } else {
      res.status(404).send("Not found");
    }
  } catch (error) {
    next(error);
  }
});

categoryRouter.put("/:id", async (req, res, next) => {
  try {
    const data = await category.update(req.body, {
      where: {
        id: req.params.id,
      },

      returning: true,
    });

    res.send(data[1][0]);
  } catch (error) {
    next(error);
  }
});

export default categoryRouter;
