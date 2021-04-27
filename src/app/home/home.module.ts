import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CookiesComponent } from './components/cookies/cookies.component';
import { ThankYouEbookHomeComponent } from './components/thank-you-ebook/thank-you-ebook.component';
import { LandingFreeEbookHomeComponent } from './components/landing-free-ebook/landing-free-ebook.component';
import { DownloadFreeEbookHomeComponent } from './components/download-free-ebook/download-free-ebook.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [HomeComponent, ThankYouEbookHomeComponent, LandingFreeEbookHomeComponent, DownloadFreeEbookHomeComponent, CookiesComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    HttpClientJsonpModule,
    HttpClientModule
  ]
})
export class HomeModule { }
