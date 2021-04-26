import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEdit, faLongArrowAltDown, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { Book, FoundBook } from 'src/app/core/intefaces/interfaces';
import { BookService } from 'src/app/core/services/book.service';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.scss']
})
export class BooksPageComponent implements OnInit {

  faLongArrowAltDown = faLongArrowAltDown;
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;
  faPlus = faPlus;
  books$: Observable<FoundBook[]>;
  bookById: Book;

  constructor(private router: Router,
    private bookService: BookService) { }

  ngOnInit(): void {
    this.books$ = this.bookService.FoundAllBooks();
  }

  addItem() {
    this.router.navigate(['/admin', 'bookdetail']);
  }

  deleteItem(book: FoundBook){
    if(!confirm(`Are you sure you want to delete ${book.title} ?`)){
      return;
    }
    this.bookService.DeleteBook(book.id).subscribe(() => {
      this.books$ = this.bookService.FoundAllBooks();
    });
  }

  editItem(book: FoundBook){
    this.bookService.GetBookById(book.id).subscribe((value) => {

      this.bookById = value;
      this.bookById.id = book.id;
      this.router.navigate(['/admin', 'bookdetail'], {
        state: {
          options: {
            book: this.bookById
          }
        }
      });
    });
  }

}
