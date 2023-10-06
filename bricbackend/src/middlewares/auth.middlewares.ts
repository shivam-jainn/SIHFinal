import express, { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Define a custom Request type to include userId
interface AuthRequest extends Request {
  userId: string;
}

export function authenticateUser(req: AuthRequest, res: Response, next: NextFunction) {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Authentication required' });
  }

  try {
    const decoded = jwt.verify(token, 'your-secret-key') as { _id: string }; // Expecting the _id from MongoDB
    req.userId = decoded._id; // Assign the user's MongoDB _id to the request object
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}
