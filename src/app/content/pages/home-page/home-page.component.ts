import { Component, OnInit } from '@angular/core';
import { faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { FoundBookFund } from 'src/app/core/intefaces/interfaces';
import { HomePageService } from 'src/app/core/services/home-page.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  faLongArrowAltDown = faLongArrowAltDown;
  libraryData$: Observable<FoundBookFund[]>;

  constructor(private homePageService: HomePageService) { }

  ngOnInit(): void {
    this.libraryData$ = this.homePageService.FoundAllData();
  }
}
