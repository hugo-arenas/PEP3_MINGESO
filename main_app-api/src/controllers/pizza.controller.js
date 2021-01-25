import HttpStatus from 'http-status-codes';
import * as PizzaService from '../services/pizza.service';

/**
 * Controller to get all pizzas available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getAllPizzas = async (req, res, next) => {
  try {
    const data = await PizzaService.getAllPizzas();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All pizzas fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to get a single pizza
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getPizza = async (req, res, next) => {
  try {
    const data = await PizzaService.getPizza(req.params._id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Pizza fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to create a new pizza
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const newPizza = async (req, res, next) => {
  try {
    const data = await PizzaService.newPizza(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'Pizza created successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to update a pizza
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const updatePizza = async (req, res, next) => {
  try {
    const data = await PizzaService.updatePizza(req.params._id, req.body);
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'Pizza updated successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to delete a pizza
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const deletePizza = async (req, res, next) => {
  try {
    await PizzaService.deletePizza(req.params._id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: [],
      message: 'Pizza deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};
