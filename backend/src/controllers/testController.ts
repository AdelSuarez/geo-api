// src/controllers/geoController.ts
import { Request, Response } from 'express';
import * as geoService from '../services/testService';

export const getCity = async (req: Request, res: Response) => {
    try {
        const { city } = req.params;
        // Llamamos al servicio 
        const data = await geoService.getCityData(city);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error interno' });
    }
};