import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/user.js';

// Utility: normalize email & basic field checks
const normalizeEmail = (email) => (email || '').trim().toLowerCase();
const requireFields = (obj, fields) => fields.every((f) => obj?.[f]);

// ---------- CRUD ----------
export const getAll = async (_req, res) => {
  try {
    const users = await User.find().select('-password').lean();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password').lean();
    if (!user) return res.status(404).json({ message: 'Not found' });
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const createOne = async (req, res) => {
  try {
    const { name, email, password } = req.body || {};
    if (!requireFields(req.body, ['name', 'email', 'password'])) {
      return res.status(400).json({ message: 'name, email, password are required' });
    }
    const emailNorm = normalizeEmail(email);
    const exists = await User.findOne({ email: emailNorm }).lean();
    if (exists) return res.status(409).json({ message: 'Email already registered' });

    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({
      name: name?.trim(),
      email: emailNorm,
      password: hashed,
      created: new Date(),
    });
    res.status(201).json({ _id: user._id, name: user.name, email: user.email });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updateById = async (req, res) => {
  try {
    const update = { ...req.body, updated: new Date() };
    if (update.email) update.email = normalizeEmail(update.email);
    if (update.password) update.password = await bcrypt.hash(update.password, 10);

    const user = await User.findByIdAndUpdate(req.params.id, update, {
      new: true,
      runValidators: true,
    }).select('-password');

    if (!user) return res.status(404).json({ message: 'Not found' });
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteById = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteAll = async (_req, res) => {
  try {
    await User.deleteMany({});
    res.json({ message: 'All users removed' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ---------- AUTH ----------
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body || {};
    if (!requireFields(req.body, ['name', 'email', 'password'])) {
      return res.status(400).json({ message: 'name, email, password are required' });
    }
    const emailNorm = normalizeEmail(email);
    const exists = await User.findOne({ email: emailNorm }).lean();
    if (exists) return res.status(409).json({ message: 'Email already registered' });

    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({
      name: name?.trim(),
      email: emailNorm,
      password: hashed,
      created: new Date(),
    });

    res.status(201).json({
      message: 'User registered successfully',
      user: { _id: user._id, name: user.name, email: user.email },
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body || {};
    if (!requireFields(req.body, ['email', 'password'])) {
      return res.status(400).json({ message: 'email and password are required' });
    }

    const emailNorm = normalizeEmail(email);
    const user = await User.findOne({ email: emailNorm });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(401).json({ message: 'Invalid credentials' });

    if (!process.env.JWT_SECRET) {
      return res.status(500).json({ message: 'Server misconfig: missing JWT_SECRET' });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ message: 'Login successful', token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const logout = async (_req, res) => {
  // Stateless JWT: client just drops the token; nothing to invalidate server-side.
  res.json({ message: 'User logged out successfully' });
};


