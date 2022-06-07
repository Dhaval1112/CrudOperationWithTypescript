import mongoose, { Schema } from 'mongoose';
import IBook from '../interfaces/book';

const BookSchema: Schema = new Schema(
    {
        title: { type: String, required: true },
        author: { type: String, required: String },
        extraInformation: { type: String },
        isDeleted: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
);
BookSchema.post<IBook>('save', function () {
    this.extraInformation = 'This is another function for saving extra information.!';
});

export default mongoose.model<IBook>('Book', BookSchema);
