import Ingrediente from '../models/ingrediente.model';

//get all ingredientes
export const getAllIngredientes = async () => {
  const data = await Ingrediente.find();
  return data;
};

//create new ingredientes
export const newIngrediente = async (body) => {
  const data = await Ingrediente.create(body);
  return data;
};

//update single ingrediente
export const updateIngrediente = async (_id, body) => {
  const data = await Ingrediente.findByIdAndUpdate(
    {
      _id
    },
    body,
    {
      new: true
    }
  );
  return data;
};

//delete single ingrediente
export const deleteIngrediente = async (id) => {
  await Ingrediente.findByIdAndDelete(id);
  return '';
};

//get single ingrediente
export const getIngrediente = async (id) => {
  const data = await Ingrediente.findById(id);
  return data;
};
