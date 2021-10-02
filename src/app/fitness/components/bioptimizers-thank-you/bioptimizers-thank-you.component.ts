import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreService } from 'src/app/core/services/core.service';

@Component({
  selector: 'app-bioptimizers-thank-you',
  templateUrl: './bioptimizers-thank-you.component.html',
  styleUrls: ['./bioptimizers-thank-you.component.scss']
})
export class BioptimizersThankYouComponent implements OnInit {

  constructor(private coreService: CoreService, private router: Router) { }

  ngOnInit(): void {
    if (this.router.url.includes('/lp')) {
      this.coreService.setComponentState(false);
    }
  }

}
