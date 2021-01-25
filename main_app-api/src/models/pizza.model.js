import { Schema, model } from 'mongoose';

const pizzaSchema = new Schema(
  {
    name: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

export default model('Pizza', pizzaSchema);
