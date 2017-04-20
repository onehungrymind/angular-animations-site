import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from '../shared/services/content.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  page: Object;

  constructor(private route: ActivatedRoute, private contentService: ContentService) {
    this.page = this.contentService.pages[this.route.snapshot.data['page']];
  }

  ngOnInit() {
    console.log('PAGE', this.page);
  }
}
