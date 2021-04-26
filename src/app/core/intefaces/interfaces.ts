export interface Admin {
  login: string;
  password: string;
  returnSecureToken?: boolean;
}

export interface FbCreateResponse {
  name: string;
}

export interface FbAuthResponse {
  idToken: string;
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
  isbn: string;
  bookTitle: string;
  bookAmountPage: number;
  bookYear: number;
  authorName: string;
  authorSurname: string;
  authorPatronymic: string;
  publisher: string;
  genre: string;
  libraryName: string;
  libraryAddress: string;
  libraryTelephone: string;
  amount: number;
}

export interface TotalPage {
  items: Array<FoundBookFund>;
  totalCount: number;
}

export interface Book {
  id?: number;
  isbn: string;
  title: string;
  amountPage: number;
  year: number;
  publisherId: number;
  genreId: number;
  authorId: number;
}

export interface FoundBook {
  id?: number;
  isbn: string;
  title: string;
  amountPage: number;
  year: number;
  authorName: string;
  authorSurname: string;
  authorPatronymic: string;
  publisher: string;
  genre: string;
}

export interface FoundAuthor {
  id: number;
  name: string;
  surname: string;
  patronymic: string;
}

export interface Author {
  id?: number;
  name: string;
  surname: string;
  patronymic: string;
}

export interface FoundLibrary {
  id: number;
  name: string;
  address: string;
  telephone: string;
}

export interface Library {
  id?: number;
  name: string;
  address: string;
  telephone: string;
}

export interface BookFundSearchCondition {
  isbn: string[];
  bookTitle: string[];
  bookAmountPage: number[];
  bookYear: number[];
  authorName: string[];
  authorSurname: string[];
  authorPatronymic: string[];
  publisher: string[];
  genre: string[];
  libraryName: string[];
  libraryAddress: string[];
  libraryTelephone: string[];
  amount: number[];
  pageSize: number;
  page: number;
  sortDirection: string;
  sortProperty: string;
}


export interface BookSearchCondition {
  isbn: string[];
  title: string[];
  authorName: string[];
  authorSurname: string[];
  authorPatronymic: string[];
  publisher: string[];
  genre: string[];
  amountPage: number[];
  year: number[];
  pageSize: number;
  page: number;
  sortDirection: string;
  sortProperty: string;
}
