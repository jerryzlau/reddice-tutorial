import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/user';
import jwt from 'jsonwebtoken';
let router = express.Router();

router.post('/', (req,res) => {
  res.status(200).json({user: req.currentUser});
});

export default router;