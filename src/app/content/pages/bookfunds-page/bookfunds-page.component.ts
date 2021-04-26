import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEdit, faLongArrowAltDown, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { BookFund, FoundBookFund } from 'src/app/core/intefaces/interfaces';
import { BookFundService } from 'src/app/core/services/bookfund.service';

@Component({
  selector: 'app-bookfunds-page',
  templateUrl: './bookfunds-page.component.html',
  styleUrls: ['./bookfunds-page.component.scss']
})
export class BookfundsPageComponent implements OnInit {

  faLongArrowAltDown = faLongArrowAltDown;
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;
  faPlus = faPlus;
  bookfunds$: Observable<FoundBookFund[]>;
  bookFundById: BookFund;

  constructor(private router: Router,
    private bookfundService: BookFundService) { }

  ngOnInit(): void {
    this.bookfunds$ = this.bookfundService.FoundAllBookFunds();
  }

  addItem() {
    this.router.navigate(['/admin', 'bookfunddetail']);
  }

  deleteItem(bookfund: BookFund, title: string){
    if(!confirm(`Are you sure you want to delete ${title} ?`)){
      return;
    }
    this.bookfundService.DeleteBookFund(bookfund.id).subscribe(() => {
      this.bookfunds$ = this.bookfundService.FoundAllBookFunds();
    });
  }

  editItem(bookfund: BookFund){
    this.bookfundService.GetBookFundById(bookfund.id).subscribe((value) => {
      this.bookFundById = value;
      this.bookFundById.id = bookfund.id;
      this.router.navigate(['/admin', 'bookfunddetail'], {
        state: {
          options: {
            bookfund: this.bookFundById
          }
        }
      });
    });
  }


}
