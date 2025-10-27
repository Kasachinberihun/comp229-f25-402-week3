
// server/controllers/qualificationController.js
import Qualification from '../models/Qualification.js';

export const getAll = async (_req, res) => {
  const items = await Qualification.find();
  res.json(items);
};

export const getById = async (req, res) => {
  const item = await Qualification.findById(req.params.id);
  if (!item) return res.status(404).json({ message: 'Not found' });
  res.json(item);
};

export const createOne = async (req, res) => {
  const created = await Qualification.create(req.body);
  res.status(201).json(created);
};

export const updateById = async (req, res) => {
  const updated = await Qualification.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updated) return res.status(404).json({ message: 'Not found' });
  res.json(updated);
};

export const deleteById = async (req, res) => {
  const deleted = await Qualification.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).json({ message: 'Not found' });
  res.json({ message: 'Deleted' });
};

export const deleteAll = async (_req, res) => {
  await Qualification.deleteMany({});
  res.json({ message: 'All qualifications removed' });
};
