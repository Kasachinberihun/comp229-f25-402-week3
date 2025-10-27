import ProjectModel from '../models/Project.js';

// Create CRUD operations for Project

//Get All Proects = same as db.projects.find()
export const getAllProjects = async (req, res) => {
    try {
    const projects = await ProjectModel.find();
    res.status(200).json(projects);
} catch (error) {
    res.status(500).json({ message: error.message }); // 500 HTTP status code means server error
};
};

// Read a project by ID = same as db.projects.findOne({_id: id})
export const getProjectById = async (req, res) => {
    try {
        
        const project = await ProjectModel.findById(req.params.id);
        if (!project) {
            return res.status(404).json({ message: "Project not found" }); // 404 HTTP status code means not found
        }
        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ message: error.message }); // 500 HTTP status code means server error
    }
}
// Create a new project = same as db.projects.insertOne()
export const createProject = async (req, res) => {
    try {
        const newProject = new ProjectModel(req.body);
        const savedProject = await newProject.save();
        res.status(201).json(savedProject);
    } catch (error) {
        res.status(500).json({ message: error.message }); // 500 HTTP status code means server error
    }
}
// Update a project by ID = same as db.projects.updateOne({_id: id}, {$set: req.body})
export const updateProjectById = async (req, res) => {
    try {
        const updatedProject = await ProjectModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProject) {
            return res.status(404).json({ message: "Project not found" }); // 404 HTTP status code means not found
        }
        res.status(200).json(updatedProject);
    } catch (error) {
        res.status(500).json({ message: error.message }); // 500 HTTP status code means server error
    }
}
// Delete a project by ID = same as db.projects.deleteOne({_id: id})
export const deleteProjectById = async (req, res) => {
    try {
        const deletedProject = await ProjectModel.findByIdAndDelete(req.params.id);
        if (!deletedProject) {
            return res.status(404).json({ message: "Project not found" }); // 404 HTTP status code means not found
        }
        res.status(200).json({ message: "Project deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message }); // 500 HTTP status code means server error
    }
}