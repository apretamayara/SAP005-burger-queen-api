const db = require('../db/models');

const OrdersController = {
  async getAll(req, res) {
    try {
      const order = await db.Orders.findAll();
      res.status(200).send(order);
    } catch (error) {
      res.status(400).send('deu ruim');
    }
  },

  async getId(req, res) {
    try {
      const order = await db.Orders.findOne();
      res.status(200).send(order);
    } catch (error) {
      res.status(400).send('deu ruim');
    }
  },

  async post(req, res) {
    try {
      const order = await db.Orders.create();
      res.status(200).send(order);
    } catch (error) {
      res.status(400).send('deu ruim');
    }
  },

  async put(req, res) {
    try {
      const order = await db.Orders.update();
      res.status(200).send(order);
    } catch (error) {
      res.status(400).send('deu ruim');
    }
  },

  async delete(req, res) {
    try {
      const order = await db.Orders.destroy();
      res.status(200).send(order);
    } catch (error) {
      res.status(400).send('deu ruim');
    }
  },
};
module.exports = OrdersController;