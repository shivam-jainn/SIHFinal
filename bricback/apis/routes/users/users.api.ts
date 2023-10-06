import express, { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const userRouter = Router();

// Route for user profile
userRouter.get('/:username', async (req, res) => {
  const username = req.params.username;
  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  });

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Route for the user's dashboard
userRouter.get('/:username/dashboard', (req, res) => {
  const username = req.params.username;
  res.send(`Dashboard for ${username}`);
});

// Route for the user's project dashboard
userRouter.get('/:username/dashboard/:project', async (req, res) => {
  const username = req.params.username;
  const projectName = req.params.project;
  const user = await prisma.user.findUnique({
    where: {
      username,
    },
    include: {
      projects: {
        where: {
          projectName,
        },
      },
    },
  });

  if (user && user.projects.length > 0) {
    res.json(user.projects[0]);
  } else {
    res.status(404).json({ message: 'Project not found' });
  }
});

// Route for a specific project's view
userRouter.get('/:username/dashboard/:project/:view', async (req, res) => {
  const username = req.params.username;
  const projectName = req.params.project;
  const viewName = req.params.view;
  const user = await prisma.user.findUnique({
    where: {
      username,
    },
    include: {
      projects: {
        where: {
          projectName,
        },
        include: {
          views: {
            where: {
              viewName,
            },
          },
        },
      },
    },
  });

  if (user && user.projects.length > 0 && user.projects[0].views.length > 0) {
    res.json(user.projects[0].views[0]);
  } else {
    res.status(404).json({ message: 'View not found' });
  }
});

// Route for adding a view to a project
userRouter.get('/:username/dashboard/:project/addview', (req, res) => {
  const username = req.params.username;
  const projectName = req.params.project;
  res.send(`Add View to ${username}'s project: ${projectName}`);
});


export default userRouter;