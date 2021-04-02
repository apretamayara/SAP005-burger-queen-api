const db = require('../db/models');

const UsersController = {
  async getAll(req, res) {
    try {
      const user = await db.Users.findAll();
      res.status(200).send(user);
    } catch (error) {
      res.status(400).send('deu ruim');
    }
  },

  async getId(req, res) {
    try {
      const user = await db.Users.findOne();
      res.status(200).send(user);
    } catch (error) {
      res.status(400).send('deu ruim');
    }
  },

  async post(req, res) {
    try {
      const user = await db.Users.create();
      res.status(200).send(user);
    } catch (error) {
      res.status(400).send('deu ruim');
    }
  },

  async put(req, res) {
    try {
      const user = await db.Users.update();
      res.status(200).send(user);
    } catch (error) {
      res.status(400).send('deu ruim');
    }
  },

  async delete(req, res) {
    try {
      const user = await db.Users.destroy();
      res.status(200).send(user);
    } catch (error) {
      res.status(400).send('deu ruim');
    }
  },
};
module.exports = UsersController;