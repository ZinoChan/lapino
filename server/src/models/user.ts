import { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone?: string;
  isPhoneValidated?: boolean;
  city?: string;
  address?: string;
  zipCode?: string;
  avatar?: string;
  role: string;
}

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: {
      validator: (email) => {
        const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        return regex.test(email);
      },
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 60,
  },
  phone: String,
  isPhoneValidated: {
    type: Boolean,
    default: false,
  },
  city: String,
  address: String,
  zipCode: String,
  avatar: String,
  role: {
    type: String,
    required: true,
    enum: ['admin', 'user'],
    default: 'user',
  },
});

export default model<IUser>('User', userSchema);
