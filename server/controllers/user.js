import UserModel from '../models/user.js';

// Create CRUD operations for User

//Get All Users = same as db.users.find()
export const getAllUsers = async (req, res) => {
    try {
    const users = await UserModel.find();
    res.status(200).json(users);
} catch (error) {
    res.status(500).json({ message: error.message }); // 500 HTTP status code means server error
};
};

// Read a user by ID = same as db.users.findOne({_id: id})
export const getUserById = async (req, res) => {
    try {

        const user = await UserModel.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" }); // 404 HTTP status code means not found
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message }); // 500 HTTP status code means server error
    }
}
// Create a new user = same as db.users.insertOne()
export const createUser = async (req, res) => {
    try {
        const newUser = new UserModel(req.body);
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({ message: error.message }); // 500 HTTP status code means server error
    }
}
// Update a user by ID = same as db.users.updateOne({_id: id}, {$set: req.body})
export const updateUserById = async (req, res) => {
    try {
        const updatedUser = await UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" }); // 404 HTTP status code means not found
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: error.message }); // 500 HTTP status code means server error
    }
}
// Delete a user by ID = same as db.users.deleteOne({_id: id})
export const deleteUserById = async (req, res) => {
    try {
        const deletedUser = await UserModel.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" }); // 404 HTTP status code means not found
        }
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message }); // 500 HTTP status code means server error
    }
}


// Login useer
export const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body; // destructuring from body
        const user = await UserModel.findOne({ email })

        if (!user) {
            return res.status(404).json({ message: 'User not found' }); // 404 HTTP status code means not found
        }
        const isPasswordValid = await user.comparePassword(password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid Password' }); // 401 HTTP status code means unauthorized
        }
        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        res.status(500).json({ message: error.message }); // 500 HTTP status code means server error
    }
};
