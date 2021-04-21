export interface Admin {
  email: string;
  password: string;
  returnSecureToken?: boolean;
}

export interface FbCreateResponse {
  name: string;
}

export interface FbAuthResponse {
  idToken: string;
  expiresIn: string;
}

export interface Publisher {
  id?: number;
  name: string;
}

export interface FoundPublisher {
  id: number;
  name: string;
}

export interface Genre {
  id?: number;
  name: string;
}

export interface FoundGenre {
  id: number;
  name: string;
}

export interface BookFund {
  id?: number;
  amount: number;
  bookId: number;
  libraryId: number;
}

export interface FoundBookFund {
  id: number;
  amount: number;
  libraryName: string;
  libraryAddress: string;
  libraryTelephone: string;
  bookTitle: string;
  bookAmountPage: number;
  bookYear: number;
  authorName: string;
  authorSurname: string;
  authorPatronymic: string;
  publisher: string;
  genre: string;
}

export interface BookFundSearchCondition {
  amount: number;
  libraryName: string;
  libraryAddress: string;
  libraryTelephone: string;
  bookTitle: string;
  bookAmountPage: number;
  bookYear: number;
  authorName: string;
  authorSurname: string;
  authorPatronymic: string;
  publisher: string;
  genre: string;
}

export interface Book {
  id?: number;
  Title: string;
  AmountPage: number;
  Year: number;
  publisherId: number;
  genreId: number;
  authorId: number;
}

export interface FoundBook {
  id?: number;
  Title: string;
  AmountPage: number;
  Year: number;
  authorName: string;
  authorSurname: string;
  authorPatronymic: string;
  publisher: string;
  genre: string;
}

export interface FoundAuthor {
  id: number;
  Name: string;
  Surname: string;
  Patronymic: string;
}

export interface Author {
  id?: number;
  Name: string;
  Surname: string;
  Patronymic: string;
}

export interface FoundLibrary {
  id: number;
  Name: string;
  Surname: string;
  Patronymic: string;
}

export interface Library {
  id?: number;
  Name: string;
  Address: string;
  Telephone: string;
}
