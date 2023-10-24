/*
 * TODO: Fill this out with the routes layer for your toxic person! Hint: tale a look at admin.route.ts and see how that file
 * defines the routes that will be hit by the backend, and which functions they call from the controller layer to perform the
 * desired function.
 */

import express from 'express';
import { createToxicPersonController, getAllToxicPeopleController } from '../controllers/toxicperson.controller';

const router = express.Router();

router.get('/all', getAllToxicPeopleController);
router.post('/createPerson', createToxicPersonController);

export default router;