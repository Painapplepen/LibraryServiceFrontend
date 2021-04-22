import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FoundPublisher } from 'src/app/core/intefaces/interfaces';
import { PublisherService } from 'src/app/core/services/publisher.service';

@Component({
  selector: 'app-publishers-page',
  templateUrl: './publishers-page.component.html',
  styleUrls: ['./publishers-page.component.scss']
})
export class PublishersPageComponent implements OnInit {


  publsihers$: Observable<FoundPublisher[]>;
  constructor(private publisherService: PublisherService) { }

  ngOnInit(): void {
    debugger
    this.publsihers$ = this.publisherService.FoundAllPublishers();
  }

}
