// Add your mongoose schema for "foo"
import { IFoo } from '../types/foo';
import { model, Schema } from 'mongoose';

const fooSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  coolnessFactor: {
    type: String,
    required: true,
  },
});

export default model<IFoo>('Foo', fooSchema);
