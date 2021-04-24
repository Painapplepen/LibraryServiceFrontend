import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Library } from 'src/app/core/intefaces/interfaces';
import { LibraryService } from 'src/app/core/services/library.service';

@Component({
  selector: 'app-libraries-page-detail',
  templateUrl: './libraries-page-detail.component.html',
  styleUrls: ['./libraries-page-detail.component.scss']
})
export class LibrariesPageDetailComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  library: Library;
  isEditMode = false;

  constructor( private router: Router,
    private libraryService: LibraryService) { }

  ngOnInit(): void {
    const options = history.state.options;
    this.library = options && options.library;
    this.form = new FormGroup({
      libraryName: new FormControl('', [Validators.required, Validators.maxLength(24)]),
      libraryAddress: new FormControl('', [Validators.required, Validators.maxLength(24)]),
      libraryTelephone: new FormControl('', [Validators.required, Validators.maxLength(24)])
    });
    if(this.library) {
      this.form.get("libraryName").setValue(this.library.name);
      this.form.get("libraryAddress").setValue(this.library.address);
      this.form.get("libraryTelephone").setValue(this.library.telephone);
      this.isEditMode = true;
    }
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    this.submitted = true;

    const library: Library = {
      name: this.form.value.libraryName,
      address: this.form.value.libraryAddress,
      telephone: this.form.value.libraryTelephone
    };
    if(this.isEditMode){
      library.id = this.library.id;
      this.libraryService.UpdateLibrary(library).subscribe(() => {
        this.form.reset();
        this.router.navigate(['/admin', 'libraries']);
        this.submitted = false;
      }, () => {
        this.submitted = false;
        this.isEditMode = false;
      });
    }else {
      this.libraryService.AddLibrary(library).subscribe(() => {
        this.form.reset();
        this.router.navigate(['/admin', 'libraries']);
        this.submitted = false;
      }, () => {
        this.submitted = false;
      });
    }
  }

}
