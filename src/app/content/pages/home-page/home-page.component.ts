import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { faLongArrowAltDown, faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { BookFundSearchCondition, FoundBookFund, TotalPage } from 'src/app/core/intefaces/interfaces';
import { HomePageService } from 'src/app/core/services/home-page.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  form: FormGroup;
  faLongArrowAltDown = faLongArrowAltDown;
  items$: FoundBookFund[];
  count: number;
  currentPage: number;
  selector = [
    "ISBN",
    "Title",
    "Pages",
    "Year",
    "Name",
    "Surname",
    "Patronymic",
    "Publisher",
    "Genre",
    "Library",
    "Address",
    "Telephone",
    "Amount"
  ];
  selectedValue: string;
  selectedType: string;
  propertyFilter: string = "isbn";
  private conditions: BookFundSearchCondition = {
    isbn: [],
    bookTitle: [],
    bookAmountPage: [],
    bookYear: [],
    authorName: [],
    authorSurname: [],
    authorPatronymic: [],
    publisher: [],
    genre: [],
    libraryName: [],
    libraryAddress: [],
    libraryTelephone: [],
    amount: [],
    pageSize: 10,
    page: 0,
    sortDirection: "asc",
    sortProperty: "isbn"
  };
  icons = {
    isbn: faLongArrowAltDown,
    title: faLongArrowAltDown,
    pages: faLongArrowAltDown,
    year: faLongArrowAltDown,
    genre: faLongArrowAltDown,
    library: faLongArrowAltDown,
    address: faLongArrowAltDown,
    telephone: faLongArrowAltDown,
    publisher: faLongArrowAltDown,
    amount: faLongArrowAltDown
  };

  constructor(private homePageService: HomePageService) { }

  ngOnInit(): void {
    this.homePageService.FoundAllData(this.conditions).subscribe((value) => {
      this.items$ = value.items;
      this.count = value.totalCount;
      this.currentPage = 0;
    });
    this.form = new FormGroup({
      inputValue: new FormControl(),
      selectType: new FormControl(null)
    });
  }

  submit() {
    if(this.form.get("inputValue").value){
      this.selectedValue = this.form.get("inputValue").value;
      this.form.get("inputValue").setValue("");
      console.log(this.form.get("selectType").value)
      this.selectedType = this.form.get("selectType").value;
      switch(this.selectedType) {
        case "ISBN": {
          this.conditions.isbn.push(this.selectedValue);
          break;
        };
        case "Title": {
          this.conditions.bookTitle.push(this.selectedValue);
          break;
        };
        case "Pages": {
          this.conditions.bookAmountPage.push(+this.selectedValue);
          break;
        };
        case "Year": {
          this.conditions.bookYear.push(+this.selectedValue);
          break;
        };
        case "Name": {
          this.conditions.authorName.push(this.selectedValue);
          break;
        };
        case "Surname": {
          this.conditions.authorSurname.push(this.selectedValue);
          break;
        };
        case "Patronymic": {
          this.conditions.authorPatronymic.push(this.selectedValue);
          break;
        };
        case "Publisher": {
          this.conditions.publisher.push(this.selectedValue);
          break;
        };
        case "Genre": {
          this.conditions.genre.push(this.selectedValue);
          break;
        };
        case "Library": {
          this.conditions.libraryName.push(this.selectedValue);
          break;
        };
        case "Address": {
          this.conditions.libraryAddress.push(this.selectedValue);
          break;
        };
        case "Telephone": {
          this.conditions.libraryTelephone.push(this.selectedValue);
          break;
        };
        case "Amount": {
          this.conditions.amount.push(+this.selectedValue);
          break;
        };
      }
    this.conditions.page = 0;
    this.conditions.pageSize = 10;
    this.conditions.sortProperty = this.propertyFilter;
    this.homePageService.FoundAllData(this.conditions).subscribe((value) => {
      this.items$ = value.items,
      this.count = value.totalCount
      this.currentPage = 0;
      this.conditions.isbn = [];
      this.conditions.amount = [];
      this.conditions.authorName = [];
      this.conditions.authorPatronymic = [];
      this.conditions.authorSurname = [];
      this.conditions.bookAmountPage = [];
      this.conditions.bookTitle = [];
      this.conditions.bookYear = [];
      this.conditions.genre = [];
      this.conditions.libraryAddress = [];
      this.conditions.libraryName = [];
      this.conditions.libraryTelephone = [];
      this.conditions.publisher = [];
    });
    }
  }

  changePage(newPage: number) {
    this.conditions.page = newPage;
    this.currentPage = newPage;
    this.homePageService.FoundAllData(this.conditions).subscribe((value) => {
      this.items$ = value.items,
      this.count = value.totalCount
    });
  }

  filter(property: string){
    if(this.icons[property] === faLongArrowAltDown){
      this.icons[property] = faLongArrowAltUp
      this.conditions.sortDirection = "asc";
    } else {
      this.icons[property] = faLongArrowAltDown
      this.conditions.sortDirection = "desc";
    }
    this.propertyFilter = property;
    this.conditions.page = 0;
    this.conditions.pageSize = 10;
    this.conditions.sortProperty = `${property}`;
    this.homePageService.FoundAllData(this.conditions).subscribe((value) => {
      this.items$ = value.items,
      this.count = value.totalCount
      this.currentPage = 0;
    });
  }
}
