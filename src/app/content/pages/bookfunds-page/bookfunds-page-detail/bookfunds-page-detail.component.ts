import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Book, BookFund, FoundAuthor, FoundBook, FoundGenre, FoundLibrary, FoundPublisher } from 'src/app/core/intefaces/interfaces';
import { AuthorService } from 'src/app/core/services/author.service';
import { BookService } from 'src/app/core/services/book.service';
import { BookFundService } from 'src/app/core/services/bookfund.service';
import { GenreService } from 'src/app/core/services/genre.service';
import { LibraryService } from 'src/app/core/services/library.service';

@Component({
  selector: 'app-bookfunds-page-detail',
  templateUrl: './bookfunds-page-detail.component.html',
  styleUrls: ['./bookfunds-page-detail.component.scss']
})
export class BookfundsPageDetailComponent implements OnInit {

  form: FormGroup;
  bookFund: BookFund;
  books$: FoundBook[];
  libraries$: FoundLibrary[];
  isEditMode = false;
  submitted = false;

  constructor(private router: Router,
              private bookService: BookService,
              private libraryService: LibraryService,
              private bookFundService: BookFundService) { }

  ngOnInit(): void {
    this.bookService.FoundAllBooks().subscribe((value) => {
      this.books$ = value;
    });
    this.libraryService.FoundAllLibraries().subscribe((value) => {
      this.libraries$ = value;
    });
    const options = history.state.options;
    this.bookFund = options && options.bookfund;
    console.log(this.bookFund);
    debugger
    this.form = new FormGroup({
      amount: new FormControl('', [Validators.required, Validators.maxLength(6)]),
      book: new FormControl('', [Validators.required]),
      library: new FormControl('', [Validators.required])
    });
    if(this.bookFund) {
      this.form.get("amount").setValue(this.bookFund.amount);
      this.form.get("book").setValue(this.bookFund.bookId);
      this.form.get("library").setValue(this.bookFund.libraryId);
      this.isEditMode = true;
    }
  }

  submit() {
    debugger
    if (this.form.invalid) {
      return;
    }

    this.submitted = true;

    const bookFund: BookFund = {
      amount: +this.form.value.amount,
      bookId: +this.form.value.book,
      libraryId: +this.form.value.library
    };
    if(this.isEditMode){
      bookFund.id = this.bookFund.id;
      this.bookFundService.UpdateBookFund(bookFund).subscribe(() => {
        this.form.reset();
        this.router.navigate(['/admin', 'bookfunds']);
        this.submitted = false;
      }, () => {
        this.submitted = false;
        this.isEditMode = false;
      });
    }else {
      this.bookFundService.AddBookFund(bookFund).subscribe(() => {
        this.form.reset();
        this.router.navigate(['/admin', 'bookfunds']);
        this.submitted = false;
      }, () => {
        this.submitted = false;
      });
    }
  }

}
