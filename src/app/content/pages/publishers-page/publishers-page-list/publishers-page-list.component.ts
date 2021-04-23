import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEdit, faLongArrowAltDown, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { FoundPublisher, Publisher } from 'src/app/core/intefaces/interfaces';
import { PublisherService } from 'src/app/core/services/publisher.service';

@Component({
  selector: 'app-publishers-page-list',
  templateUrl: './publishers-page-list.component.html',
  styleUrls: ['./publishers-page-list.component.scss']
})
export class PublishersPageListComponent implements OnInit {

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
    this.router.navigate(['publishers','detail']);
  }

  deleteItem(id: number, publisher: string){
    if(!confirm(`Are you sure you want to delete ${publisher} ?`)){
      return;
    }
    this.publisherService.DeletePublisher(id).subscribe(() => {
      this.publsihers$ = this.publisherService.FoundAllPublishers();
    });
  }

  editItem(publisherId: number, publisherName: string){
    // const publisher: Publisher = {
    //   id: publisherId,
    //   name: publisherName
    // };
      this.router.navigate(['detail']);
  }

}
