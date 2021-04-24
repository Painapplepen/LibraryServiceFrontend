import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEdit, faLongArrowAltDown, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { FoundLibrary, Library } from 'src/app/core/intefaces/interfaces';
import { LibraryService } from 'src/app/core/services/library.service';

@Component({
  selector: 'app-libraries-page',
  templateUrl: './libraries-page.component.html',
  styleUrls: ['./libraries-page.component.scss']
})
export class LibrariesPageComponent implements OnInit {

  faLongArrowAltDown = faLongArrowAltDown;
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;
  faPlus = faPlus;
  libraries$: Observable<FoundLibrary[]>;

  constructor(private router: Router,
    private libraryService: LibraryService) { }

  ngOnInit(): void {
    this.libraries$ = this.libraryService.FoundAllLibraries();
  }

  addItem() {
    this.router.navigate(['/admin', 'librarydetail']);
  }

  deleteItem(library: Library){
    if(!confirm(`Are you sure you want to delete ${library.name} ?`)){
      return;
    }
    this.libraryService.DeleteLibrary(library.id).subscribe(() => {
      this.libraries$ = this.libraryService.FoundAllLibraries();
    });
  }

  editItem(library: Library){
      this.router.navigate(['/admin', 'librarydetail'], {
        state: {
          options: {
            library
          }
        }
      });
  }

}
