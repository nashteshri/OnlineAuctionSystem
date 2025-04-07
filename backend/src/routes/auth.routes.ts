import express, { Router } from 'express';
import { AuthController } from '../controllers/AuthController';
import { validateDTO } from '../middleware/validationMiddleware';
import { LoginDTO, RegisterDTO } from '../dtos/userDTO';
const router = Router();
router.post('/register',validateDTO(RegisterDTO),AuthController.register);
router.post('/login',validateDTO(LoginDTO),AuthController.login);

export default router;