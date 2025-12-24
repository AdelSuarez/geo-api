// src/routes/testRoute.ts
import { Router } from 'express';
import * as geoController from '../controllers/testController';

const router = Router();

/**
* @swagger
* /api/geo/city/{city}:
* get:
* summary: Obtiene datos simulados de una ciudad
* tags: 
* - Geográfico
* parameters:
* - in: path
* name: city
* schema:
* type: string
* required: true
* description: Nombre de la ciudad
* responses:
* 200:
* description: Datos obtenidos exitosamente
*/
router.get('/city/:city', geoController.getCity);

export default router;