import HttpStatus from 'http-status-codes';
import * as IngredienteService from '../services/ingrediente.service';

/**
 * Controller to get all ingredientes available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getAllIngredientes = async (req, res, next) => {
  try {
    const data = await IngredienteService.getAllIngredientes();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All ingredientes fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to get a single ingrediente
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getIngrediente = async (req, res, next) => {
  try {
    const data = await IngredienteService.getIngrediente(req.params._id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Ingrediente fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to create a new ingrediente
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const newIngrediente = async (req, res, next) => {
  try {
    const data = await IngredienteService.newIngrediente(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'Ingrediente created successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to update a ingrediente
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const updateIngrediente = async (req, res, next) => {
  try {
    const data = await IngredienteService.updateIngrediente(req.params._id, req.body);
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'Ingrediente updated successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to delete a ingrediente
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const deleteIngrediente = async (req, res, next) => {
  try {
    await IngredienteService.deleteIngrediente(req.params._id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: [],
      message: 'Ingrediente deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};
