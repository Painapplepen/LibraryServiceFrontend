import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEdit, faLongArrowAltDown, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { FoundPublisher, Publisher } from 'src/app/core/intefaces/interfaces';
import { PublisherService } from 'src/app/core/services/publisher.service';

@Component({
  selector: 'app-publishers-page',
  templateUrl: './publishers-page.component.html',
  styleUrls: ['./publishers-page.component.scss']
})
export class PublishersPageComponent implements OnInit {

  faLongArrowAltDown = faLongArrowAltDown;
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;
  faPlus = faPlus;
  publsihers$: Observable<FoundPublisher[]>;

  constructor(private router: Router,
    private publisherService: PublisherService) { }

  ngOnInit(): void {
    this.publsihers$ = this.publisherService.FoundAllPublishers();
  }

  addItem() {
    const log = this.router.navigate(['/admin', 'publisherdetail']);
  }

  deleteItem(publisher: Publisher){
    if(!confirm(`Are you sure you want to delete ${publisher.name} ?`)){
      return;
    }
    this.publisherService.DeletePublisher(publisher.id).subscribe(() => {
      this.publsihers$ = this.publisherService.FoundAllPublishers();
    });
  }

  editItem(publisher: Publisher){
      this.router.navigate(['/admin', 'publisherdetail'], {
        state: {
          options: {
            publisher
          }
        }
      });
  }
}
