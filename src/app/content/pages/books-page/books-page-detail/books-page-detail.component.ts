import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Book, FoundAuthor, FoundBook, FoundGenre, FoundPublisher } from 'src/app/core/intefaces/interfaces';
import { AuthorService } from 'src/app/core/services/author.service';
import { BookService } from 'src/app/core/services/book.service';
import { GenreService } from 'src/app/core/services/genre.service';
import { PublisherService } from 'src/app/core/services/publisher.service';

@Component({
  selector: 'app-books-page-detail',
  templateUrl: './books-page-detail.component.html',
  styleUrls: ['./books-page-detail.component.scss']
})
export class BooksPageDetailComponent implements OnInit {

  form: FormGroup;
  book: Book;
  authors$: FoundAuthor[];
  genres$: FoundGenre[];
  publishers$: FoundPublisher[];
  isEditMode = false;
  submitted = false;

  constructor(private router: Router,
              private bookService: BookService,
              private authorService: AuthorService,
              private genreService: GenreService,
              private publisherService: PublisherService) { }

  ngOnInit(): void {
    this.authorService.FoundAllAuthors().subscribe((value) => {
      this.authors$ = value;
    });
    this.genreService.FoundAllGenres().subscribe((value) => {
      this.genres$ = value;
    });
    this.publisherService.FoundAllPublishers().subscribe((value) => {
      this.publishers$ = value;
    });
    const options = history.state.options;
    this.book = options && options.book;
    console.log(options);
    this.form = new FormGroup({
      isbn: new FormControl('', [Validators.required, Validators.maxLength(24)]),
      title: new FormControl('', [Validators.required, Validators.maxLength(24)]),
      year: new FormControl('', [Validators.required, Validators.maxLength(4)]),
      pages: new FormControl('', [Validators.required, Validators.maxLength(6)]),
      author: new FormControl('', [Validators.required]),
      publisher: new FormControl('', [Validators.required]),
      genre: new FormControl('', [Validators.required])
    });
    if(this.book) {
      this.form.get("isbn").setValue(this.book.isbn);
      this.form.get("title").setValue(this.book.title);
      this.form.get("year").setValue(this.book.year);
      this.form.get("pages").setValue(this.book.amountPage);
      this.form.get("genre").setValue(this.book.genreId);
      this.form.get("publisher").setValue(this.book.publisherId);
      this.form.get("author").setValue(this.book.authorId);
      this.isEditMode = true;
    }
  }

  submit() {
    debugger
    if (this.form.invalid) {
      return;
    }

    this.submitted = true;

    const book: Book = {
      isbn: this.form.value.isbn,
      title: this.form.value.title,
      amountPage: +this.form.value.pages,
      year: +this.form.value.year,
      authorId: +this.form.value.author,
      genreId: +this.form.value.genre,
      publisherId: +this.form.value.publisher
    };
    if(this.isEditMode){
      book.id = this.book.id;
      this.bookService.UpdateBook(book).subscribe(() => {
        this.form.reset();
        this.router.navigate(['/admin', 'books']);
        this.submitted = false;
      }, () => {
        this.submitted = false;
        this.isEditMode = false;
      });
    }else {
      this.bookService.AddBook(book).subscribe(() => {
        this.form.reset();
        this.router.navigate(['/admin', 'books']);
        this.submitted = false;
      }, () => {
        this.submitted = false;
      });
    }
  }

}
