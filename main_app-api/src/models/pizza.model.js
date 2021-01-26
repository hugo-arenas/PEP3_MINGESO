import { Schema, model } from 'mongoose';

const pizzaSchema = new Schema(
  {
    name: {
      type: String
    }
  },
  {
    description: {
      type: String
    }
  },
  {
    ingredients: {
      type: [String]
    }
  },
  {
    timestamps: true
  }
);

export default model('Pizza', pizzaSchema);
