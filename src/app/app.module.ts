import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { DailyComponent } from './daily/daily.component';
import { IdeasComponent } from './ideas/ideas.component';
import { DiversityComponent } from './diversity/diversity.component';
import { EmploymentComponent } from './employment/employment.component';
import { ThemedComponent } from './themed/themed.component';
import { FundingComponent } from './funding/funding.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    DailyComponent,
    IdeasComponent,
    DiversityComponent,
    EmploymentComponent,
    ThemedComponent,
    FundingComponent,
    NewsletterComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
