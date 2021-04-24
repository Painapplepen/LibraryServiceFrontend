import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Genre } from 'src/app/core/intefaces/interfaces';
import { GenreService } from 'src/app/core/services/genre.service';


@Component({
  selector: 'app-genres-page-detail',
  templateUrl: './genres-page-detail.component.html',
  styleUrls: ['./genres-page-detail.component.scss']
})
export class GenresPageDetailComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  genre: Genre;
  isEditMode = false;

  constructor( private router: Router,
    private genreService: GenreService) { }

  ngOnInit(): void {
    const options = history.state.options;
    this.genre = options && options.genre;
    this.form = new FormGroup({
      genreName: new FormControl('', [Validators.required, Validators.maxLength(24)])
    });
    if(this.genre) {
      this.form.get("genreName").setValue(this.genre.name);
      this.isEditMode = true;
    }
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    this.submitted = true;

    const genre: Genre = {
      name: this.form.value.genreName
    };
    if(this.isEditMode){
      genre.id = this.genre.id;
      this.genreService.UpdateGenre(genre).subscribe(() => {
        this.form.reset();
        this.router.navigate(['/admin', 'genres']);
        this.submitted = false;
      }, () => {
        this.submitted = false;
        this.isEditMode = false;
      });
    }else {
      this.genreService.AddGenre(genre).subscribe(() => {
        this.form.reset();
        this.router.navigate(['/admin', 'genres']);
        this.submitted = false;
      }, () => {
        this.submitted = false;
      });
    }
  }

}
