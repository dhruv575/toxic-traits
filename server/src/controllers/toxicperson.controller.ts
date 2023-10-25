/*
 * TODO: Fill this out with the controller layer for your toxic person! Hint: Look at how admin.controller.ts
 * works in the controller layer, how it deals with the interface of IUser, and how it utilizes functions from the service layer.
 */
import express from 'express';
import ApiError from '../util/apiError';
import { createToxicPerson, getAllToxicPeople  } from '../services/toxicperson.service';



const createToxicPersonController = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
    ) => {
    const { firstName, lastName, pictureUrl, toxicTraits } = req.body;
    if (!firstName || !lastName || !pictureUrl || !toxicTraits) {
        
        next(ApiError.badRequest('Missing required fields.'));
        return;
    }
    const toxicPerson = await createToxicPerson(firstName, lastName, pictureUrl, toxicTraits);
    res.json(toxicPerson);
}


const getAllToxicPeopleController = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) => {
    const toxicPeople = await getAllToxicPeople();
    res.json(toxicPeople);

  };
 
export { createToxicPersonController, getAllToxicPeopleController };