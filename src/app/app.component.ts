import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faLongArrowAltDown = faLongArrowAltDown;
  title = 'LibraryService';
}
