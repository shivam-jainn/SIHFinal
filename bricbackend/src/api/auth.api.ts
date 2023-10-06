    import { Router,Request,Response} from 'express';
    import {UserModel} from '../database/model'
    import bcrypt from 'bcrypt';
    import jwt from 'jsonwebtoken';

    const authRoutes = Router();

    let jwtSecret = "secret";

    authRoutes.post('/signup', async (req: Request, res: Response) => {
        try {
        const { firstName, lastName ,username, email, password, confirmPassword } = req.body;
    
        // Check if the user already exists
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        
        if (password!=confirmPassword){
            return res.status(404).json({ message: 'Passwords dont match' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
    
        // Create a new user
        const user = new UserModel({
            username,
            email,
            password: hashedPassword,
            firstName,
            lastName
        });
    
        await user.save();
    
        // Generate a JWT token
        const token = jwt.sign({ username : user.username }, jwtSecret);
    
        res.status(201).json({ token });
        } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
        }
    });
    
    // Signin route
    authRoutes.post('/signin', async (req: Request, res: Response) => {
        try {
        const { email, password } = req.body;
    
        // Find the user by email
        const user = await UserModel.findOne({ email });
    
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
    
        // Compare the provided password with the hashed password
        const isPasswordValid = await bcrypt.compare(password, user.password);
    
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
    
        // Generate a JWT token
        const token = jwt.sign({ username: user.username }, jwtSecret);
    
        res.status(200).json({ token });
        } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
        }
    });
    