
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';

// ---------- CRUD ----------
export const getAll = async (_req, res) => {
  const users = await User.find().select('-password');
  res.json(users);
};

export const getById = async (req, res) => {
  const user = await User.findById(req.params.id).select('-password');
  if (!user) return res.status(404).json({ message: 'Not found' });
  res.json(user);
};

export const createOne = async (req, res) => {
  const { name, email, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashed, created: new Date() });
  res.status(201).json({ _id: user._id, name: user.name, email: user.email });
};

export const updateById = async (req, res) => {
  const update = { ...req.body, updated: new Date() };
  if (update.password) update.password = await bcrypt.hash(update.password, 10);
  const user = await User.findByIdAndUpdate(req.params.id, update, { new: true }).select('-password');
  if (!user) return res.status(404).json({ message: 'Not found' });
  res.json(user);
};

export const deleteById = async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) return res.status(404).json({ message: 'Not found' });
  res.json({ message: 'Deleted' });
};

export const deleteAll = async (_req, res) => {
  await User.deleteMany({});
  res.json({ message: 'All users removed' });
};

// ---------- AUTH ----------
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const exists = await User.findOne({ email });
    if (exists) return res.status(409).json({ message: 'Email already registered' });
    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashed, created: new Date() });
    res.status(201).json({ message: 'User registered successfully', user: { _id: user._id, name, email } });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });
    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(401).json({ message: 'Invalid credentials' });
    const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ message: 'Login successful', token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const logout = async (_req, res) => {
  res.json({ message: 'User logged out successfully' });
};
