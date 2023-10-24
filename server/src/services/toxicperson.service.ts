/*
 * TODO: Fill this out with the service layer for your toxic person! Hint: tale a look at user.service.ts and see how that service
 * uses the User model to save and update to the database.
 */
import { ToxicPerson } from "../models/toxicperson.model";



const createToxicPerson = async (
    firstName: string, 
    lastName: string,
    pictureUrl: string,
    toxicTraits: string[],
) => {
    const newToxicPerson = new ToxicPerson({
        firstName,
        lastName,
        pictureUrl,
        toxicTraits,
    });
    const toxicPerson = await newToxicPerson.save();
    return toxicPerson;
}

const getAllToxicPeople = async () => {
    const toxicPeople = await ToxicPerson.find();
    return toxicPeople;
}
