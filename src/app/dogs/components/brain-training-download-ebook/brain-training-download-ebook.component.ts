import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreService } from 'src/app/core/services/core.service';

@Component({
  selector: 'app-brain-training-download-ebook',
  templateUrl: './brain-training-download-ebook.component.html',
  styleUrls: ['./brain-training-download-ebook.component.scss']
})
export class BrainTrainingDownloadEbookComponent implements OnInit {

  constructor(private coreService: CoreService, private router: Router) { }

  ngOnInit(): void {
    if (this.router.url.includes('/lp')) {
      this.coreService.setComponentState(false);
    }
  }

}
