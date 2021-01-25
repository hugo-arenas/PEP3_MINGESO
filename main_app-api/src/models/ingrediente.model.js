import { Schema, model } from 'mongoose';

const ingredienteSchema = new Schema(
  {
    name: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

export default model('Ingrediente', ingredienteSchema);
