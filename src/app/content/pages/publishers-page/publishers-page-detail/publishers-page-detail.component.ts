import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Publisher } from 'src/app/core/intefaces/interfaces';
import { PublisherService } from 'src/app/core/services/publisher.service';

@Component({
  selector: 'app-publishers-page-detail',
  templateUrl: './publishers-page-detail.component.html',
  styleUrls: ['./publishers-page-detail.component.scss']
})
export class PublishersPageDetailComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  publisher: Publisher;
  isEditMode = false;

  constructor( private router: Router,
    private publisherService: PublisherService) { }

  ngOnInit(): void {
    const options = history.state.options;
    this.publisher = options && options.publisher;
    this.form = new FormGroup({
      publisherName: new FormControl('', [Validators.required, Validators.maxLength(24)])
    });
    if(this.publisher) {
      this.form.get("publisherName").setValue(this.publisher.name);
      this.isEditMode = true;
    }
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    this.submitted = true;

    const publisher: Publisher = {
      name: this.form.value.publisherName
    };
    if(this.isEditMode){
      publisher.id = this.publisher.id;
      this.publisherService.UpdatePublisher(publisher).subscribe(() => {
        this.form.reset();
        this.router.navigate(['/admin', 'publishers']);
        this.submitted = false;
      }, () => {
        this.submitted = false;
        this.isEditMode = false;
      });
    }else {
      this.publisherService.AddPublisher(publisher).subscribe(() => {
        this.form.reset();
        this.router.navigate(['/admin', 'publishers']);
        this.submitted = false;
      }, () => {
        this.submitted = false;
      });
    }
  }

}
