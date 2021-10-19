import { Document } from 'mongoose';

export interface IFoo extends Document {
  name: string;
  description: string;
  coolnessFactor: number;
}
