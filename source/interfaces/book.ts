import { Document } from 'mongoose';

// this document class will be add some validations of class who will extends this class
export default interface IBook extends Document {
    title: string;
    author: string;
    extraInformation: string;
}
