import { Document, Schema, model } from 'mongoose';

export interface IUser extends Document {
  username: string;
  password: string;
}

const userSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export default model<IUser>('User', userSchema);
