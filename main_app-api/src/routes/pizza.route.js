import express from 'express';
import * as pizzaController from '../controllers/pizza.controller';

const router = express.Router();

//route to get all users
router.get('', pizzaController.getAllPizzas);

//route to create a new user
router.post('', pizzaController.newPizza);

//route to get a single user by their user id
router.get('/:_id', pizzaController.getPizza);

//route to update a single user by their user id
router.put('/:_id', pizzaController.updatePizza);

//route to delete a single user by their user id
router.delete('/:_id', pizzaController.deletePizza);

export default router;
