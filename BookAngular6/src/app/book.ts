import { Author } from './Author';

export class Book {
    id: number;
    name: string;
    author: Array<Author>;
    numberOfPages: number;
    publisherName: string;
    yearOfPublication: number;
    releaseDate: Date;
    ISBN: string;
    photoUrl: string;
}

