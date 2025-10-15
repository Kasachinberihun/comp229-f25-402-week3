import express from 'express';
import {
    
    getAllProjects,
    getProjectById,
    updateProjectById,
    deleteProjectById,
    createProject,
} from '../controllers/project.js';


// Router/projects
const router = express.Router();

router.get('/debug', (_req, res) => res.json({ ok: true, at: '/projects' }));

// HTTP Verbs for RESTful APIs GET, POST, PUT, DELETE
router.get('/', getAllProjects);
router.get('/:id', getProjectById);
router.post('/', createProject);
router.put('/:id', updateProjectById);
router.delete('/:id', deleteProjectById);

export default router;