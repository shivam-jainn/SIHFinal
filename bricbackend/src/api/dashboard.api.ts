import express, { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { UserModel, ProjectModel, ViewModel, ComponentModel } from '../database/model'; // Import models

const dashboardRoutes = express.Router();


function authenticateUser(req: Request, res: Response, next: NextFunction) {
    const token = req.header('Authorization');
  
    if (!token) {
      return res.status(401).json({ message: 'Authentication required' });
    }
  
    try {
      const decoded = jwt.verify(token, 'your-secret-key');
      req.username = decoded.username; // Assuming the JWT payload contains a 'username' field
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Invalid token' });
    }
  }
  
dashboardRoutes.get('/dashboard', authenticateUser, async (req: Request, res: Response) => {
    try {
      const user = await UserModel.findOne(req.username);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Fetch user's projects
      const projects = await ProjectModel.find({ users: user._id });
  
      // Extract project IDs
      const projectIds = projects.map((project) => project._id);
  
      // Fetch views associated with the user's projects
      const views = await ViewModel.find({ project: { $in: projectIds } });
  
      // Extract view IDs
      const viewIds = views.map((view) => view._id);
  
      // Fetch components associated with the user's views
      const components = await ComponentModel.find({ view: { $in: viewIds } });
  
      res.status(200).json({
        email: user.email,
        name: `${user.firstName} ${user.lastName}`,
        projects,
        views,
        components,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });
  
export default dashboardRoutes;
