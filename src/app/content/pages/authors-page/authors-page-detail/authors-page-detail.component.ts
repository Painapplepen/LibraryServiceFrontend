import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Author } from 'src/app/core/intefaces/interfaces';
import { AuthorService } from 'src/app/core/services/author.service';

@Component({
  selector: 'app-authors-page-detail',
  templateUrl: './authors-page-detail.component.html',
  styleUrls: ['./authors-page-detail.component.scss']
})
export class AuthorsPageDetailComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  author: Author;
  isEditMode = false;

  constructor( private router: Router,
    private authorService: AuthorService) { }

  ngOnInit(): void {
    const options = history.state.options;
    this.author = options && options.author;
    this.form = new FormGroup({
      authorName: new FormControl('', [Validators.required, Validators.maxLength(24)]),
      authorSurname: new FormControl('', [Validators.required, Validators.maxLength(24)]),
      authorPatronymic: new FormControl('', [Validators.required, Validators.maxLength(24)])
    });
    if(this.author) {
      this.form.get("authorName").setValue(this.author.name);
      this.form.get("authorSurname").setValue(this.author.surname);
      this.form.get("authorPatronymic").setValue(this.author.patronymic);
      this.isEditMode = true;
    }
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    this.submitted = true;

    const author: Author = {
      name: this.form.value.authorName,
      surname: this.form.value.authorSurname,
      patronymic: this.form.value.authorPatronymic
    };
    if(this.isEditMode){
      author.id = this.author.id;
      this.authorService.UpdateAuthor(author).subscribe(() => {
        this.form.reset();
        this.router.navigate(['/admin', 'authors']);
        this.submitted = false;
      }, () => {
        this.submitted = false;
        this.isEditMode = false;
      });
    }else {
      this.authorService.AddAuthor(author).subscribe(() => {
        this.form.reset();
        this.router.navigate(['/admin', 'authors']);
        this.submitted = false;
      }, () => {
        this.submitted = false;
      });
    }
  }

}
