import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEdit, faLongArrowAltDown, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { FoundGenre, Genre } from 'src/app/core/intefaces/interfaces';
import { GenreService } from 'src/app/core/services/genre.service';


@Component({
  selector: 'app-genres-page',
  templateUrl: './genres-page.component.html',
  styleUrls: ['./genres-page.component.scss']
})
export class GenresPageComponent implements OnInit {

  faLongArrowAltDown = faLongArrowAltDown;
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;
  faPlus = faPlus;
  genres$: Observable<FoundGenre[]>;

  constructor(private router: Router,
    private genreService: GenreService) { }

  ngOnInit(): void {
    this.genres$ = this.genreService.FoundAllGenres();
  }

  addItem() {
    const log = this.router.navigate(['/admin', 'genredetail']);
  }

  deleteItem(genre: Genre){
    if(!confirm(`Are you sure you want to delete ${genre.name} ?`)){
      return;
    }
    this.genreService.DeleteGenre(genre.id).subscribe(() => {
      this.genres$ = this.genreService.FoundAllGenres();
    });
  }

  editItem(genre: Genre){
      this.router.navigate(['/admin', 'genredetail'], {
        state: {
          options: {
            genre
          }
        }
      });
  }

}
