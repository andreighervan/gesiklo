import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CoreService } from 'src/app/core/services/core.service';

@Component({
  selector: 'app-landing-free-ebook',
  templateUrl: './landing-free-ebook.component.html',
  styleUrls: ['./landing-free-ebook.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LandingFreeEbookHomeComponent implements OnInit {
  submitted: boolean;

  newsletterForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]]
  });

  constructor(private coreService: CoreService, private router: Router,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    if (this.router.url.includes('/lp')) {
      this.coreService.setComponentState(false);
    }
  }

  submit() {
    if (this.newsletterForm.invalid) {
      this.submitted = true;
      return;
    }
    this.coreService.subscribeToList(this.newsletterForm.value)
      .subscribe(res => {
        this.newsletterForm.reset();
        this.router.navigate(['/lp/thank-you']);
        window.scrollTo({ top: 0 });
      }, err => {
        console.log(err);
      })
  }
}
