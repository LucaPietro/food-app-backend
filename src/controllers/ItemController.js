const item = require('../models/Item');
const messages = require('../helpers/messages');

module.exports = {
  async index(req, res) {
    const items = await item.findAll();
    return res.json({
      data: items,
    });
  },

  async show(req, res) {
    const { id } = req.params;
    const find = await item.findByPk(id);
    if (!find) {
      return res.status(messages.NOT_FOUND.status).json(messages.NOT_FOUND);
    }
    res.json(find);
  },

  async create(req, res) {
    try {
      const record = await item.create({
        ...req.body,
        created_at: new Date(),
        updated_at: new Date(),
      });
      record.save();
      return res.json(
        messages.SUCCESSFULLY_INSERTED_DATA,
      );
    } catch (e) {
      return res.status(messages.ERROR.status).json({
        message: e.message,
        status: messages.ERROR.status,
      });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const find = await item.findByPk(id);
      if (!find) {
        return res.status(messages.NOT_FOUND.status).json(messages.NOT_FOUND);
      }
      await item.update({
        ...req.body,
        updated_at: new Date(),

      }, {
        where: { id },
      });
      const newFind = await item.findByPk(id);

      return res.json(
        {
          message: messages.SUCCESSFULLY_INSERTED_DATA.message,
          data: newFind,
        },
      );
    } catch (e) {
      return res.status(messages.ERROR.status).json({
        message: e.message,
        status: messages.ERROR.status,
      });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      const find = await item.findByPk(id);
      await find.destroy();
      return res.status(messages.SUCCESS_OPERATION.status).json(messages.SUCCESS_OPERATION);
    } catch (e) {
      return res.status(messages.ERROR.status).json({
        message: e.message,
        status: messages.ERROR.status,
      });
    }
  },

};
