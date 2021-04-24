import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEdit, faLongArrowAltDown, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { Author, FoundAuthor } from 'src/app/core/intefaces/interfaces';
import { AuthorService } from 'src/app/core/services/author.service';

@Component({
  selector: 'app-authors-page',
  templateUrl: './authors-page.component.html',
  styleUrls: ['./authors-page.component.scss']
})
export class AuthorsPageComponent implements OnInit {

  faLongArrowAltDown = faLongArrowAltDown;
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;
  faPlus = faPlus;
  authors$: Observable<FoundAuthor[]>;

  constructor(private router: Router,
    private authorService: AuthorService) { }

  ngOnInit(): void {
    this.authors$ = this.authorService.FoundAllAuthors();
  }

  addItem() {
    const log = this.router.navigate(['/admin', 'authordetail']);
  }

  deleteItem(author: Author){
    if(!confirm(`Are you sure you want to delete ${author.name} ?`)){
      return;
    }
    this.authorService.DeleteAuthor(author.id).subscribe(() => {
      this.authors$ = this.authorService.FoundAllAuthors();
    });
  }

  editItem(author: Author){
      this.router.navigate(['/admin', 'authordetail'], {
        state: {
          options: {
            author
          }
        }
      });
  }

}
