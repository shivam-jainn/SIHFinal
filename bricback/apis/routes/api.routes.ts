import express from 'express';
import userRouter from './users/users.api';

const apiRouter = express.Router();

apiRouter.use('/:user',userRouter);
// apiRouter.use('/auth',authRoutes);

    
export default apiRouter;