import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreService } from 'src/app/core/services/core.service';

@Component({
  selector: 'app-hipflexors-download-ebook',
  templateUrl: './hipflexors-download-ebook.component.html',
  styleUrls: ['./hipflexors-download-ebook.component.scss']
})
export class HipflexorsDownloadEbookComponent implements OnInit {

  constructor(private coreService: CoreService, private router: Router) { }

  ngOnInit(): void {
    if (this.router.url.includes('/lp')) {
      this.coreService.setComponentState(false);
    }
  }

}
