const establisment = require('../models/Establishment');
const messages = require('../helpers/messages');

module.exports = {
  async index(req, res) {
    const establishments = await establisment.findAll();
    return res.json({
      data: establishments,
    });
  },

  async show(req, res) {
    const { id } = req.params;
    const find = await establisment.findByPk(id);
    if (!find) {
      return res.status(messages.NOT_FOUND.status).json(messages.NOT_FOUND);
    }
    res.json(find);
  },

  async create(req, res) {
    try {
      const record = await establisment.create({
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
      const find = await establisment.findByPk(id);
      if (!find) {
        return res.status(messages.NOT_FOUND.status).json(messages.NOT_FOUND);
      }
      await establisment.update({
        ...req.body,
        updated_at: new Date(),

      }, {
        where: { id },
      });
      const newFind = await establisment.findByPk(id);

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
      const find = await establisment.findByPk(id);
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
