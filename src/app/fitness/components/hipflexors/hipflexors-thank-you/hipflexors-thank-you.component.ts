import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreService } from 'src/app/core/services/core.service';

@Component({
  selector: 'app-hipflexors-thank-you',
  templateUrl: './hipflexors-thank-you.component.html',
  styleUrls: ['./hipflexors-thank-you.component.scss']
})
export class HipflexorsThankYouComponent implements OnInit {

  constructor(private coreService: CoreService, private router: Router) { }

  ngOnInit(): void {
    if (this.router.url.includes('/lp')) {
      this.coreService.setComponentState(false);
    }
  }

}
