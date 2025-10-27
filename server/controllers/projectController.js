
// server/controllers/projectController.js
import Project from '../models/Project.js';

export const getAll = async (_req, res) => {
  const items = await Project.find();
  res.json(items);
};

export const getById = async (req, res) => {
  const item = await Project.findById(req.params.id);
  if (!item) return res.status(404).json({ message: 'Not found' });
  res.json(item);
};

export const createOne = async (req, res) => {
  const created = await Project.create(req.body);
  res.status(201).json(created);
};

export const updateById = async (req, res) => {
  const updated = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updated) return res.status(404).json({ message: 'Not found' });
  res.json(updated);
};

export const deleteById = async (req, res) => {
  const deleted = await Project.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).json({ message: 'Not found' });
  res.json({ message: 'Deleted' });
};

export const deleteAll = async (_req, res) => {
  await Project.deleteMany({});
  res.json({ message: 'All projects removed' });
};
