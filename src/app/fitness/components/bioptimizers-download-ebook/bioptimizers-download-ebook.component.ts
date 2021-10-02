import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreService } from 'src/app/core/services/core.service';

@Component({
  selector: 'app-bioptimizers-download-ebook',
  templateUrl: './bioptimizers-download-ebook.component.html',
  styleUrls: ['./bioptimizers-download-ebook.component.scss']
})
export class BioptimizersDownloadEbookComponent implements OnInit {

  constructor(private coreService: CoreService, private router: Router) { }

  ngOnInit(): void {
    if (this.router.url.includes('/lp')) {
      this.coreService.setComponentState(false);
    }
  }

}
