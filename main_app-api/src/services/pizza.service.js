import Pizza from '../models/pizza.model';

//get all pizzas
export const getAllPizzas = async () => {
  const data = await Pizza.find();
  return data;
};

//create new pizza
export const newPizza = async (body) => {
  const data = await Pizza.create(body);
  return data;
};

//update single pizza
export const updatePizza = async (_id, body) => {
  const data = await Pizza.findByIdAndUpdate(
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

//delete single pizza
export const deletePizza = async (id) => {
  await Pizza.findByIdAndDelete(id);
  return '';
};

//get single pizza
export const getPizza = async (id) => {
  const data = await Pizza.findById(id);
  return data;
};
