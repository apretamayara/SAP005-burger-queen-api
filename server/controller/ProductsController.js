const db = require('../db/models');

const ProductsController = {
  async getAll(req, res) {
    try {
      const products = await db.Products.findAll();
      res.status(200).send(products);
    } catch (error) {
      res.status(400).send('deu ruim');
    }
  },

  async getId(req, res) {
    try {
      const product = await db.Products.findOne();
      res.status(200).send(product);
    } catch (error) {
      res.status(400).send('deu ruim');
    }
  },

  async post(req, res) {
    try {
      const product = await db.Products.create();
      res.status(200).send(product);
    } catch (error) {
      res.status(400).send('deu ruim');
    }
  },

  async put(req, res) {
    try {
      const product = await db.Products.update();
      res.status(200).send(product);
    } catch (error) {
      res.status(400).send('deu ruim');
    }
  },

  async delete(req, res) {
    try {
      await db.Products.destroy();
      res.status(200).send();
    } catch (error) {
      res.status(400).send('deu ruim');
    }
  },
};
module.exports = ProductsController;