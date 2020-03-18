const Entry = require('../models/Entry');

class EntryController {

  async store(req, res) {
    const { desc, value, type } = req.body;
    const entry = await Entry.create({
      descrition: desc,
      value,
      type,
    });
    
    return res.status(200).json(entry);

  }

  async index(req, res) {
    const entries = await Entry.find(); 
    
    return res.status(200).json(entries);
    
  }

  async search(req, res) {
    const { id } = req.params;

    const entry = await Entry.findById(id);

    return res.status(200).json(entry);
  }
  async delete(req, res) {
    const { id } = req.params;

    const entry = await Entry.deleteOne({ id });

    return res.status(200).json(entry);
  }

  async update(req, res) {
    const { id } = req.params;

    const entry = await Entry.updateOne({ id });

    return res.status(200).json(entry);
  }
}

module.exports = new EntryController();