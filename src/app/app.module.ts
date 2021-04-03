import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsPageComponent } from './app/content/pages/authors-page/authors-page.component';
import { BookfundPageComponent } from './content/pages/bookfund-page/bookfund-page.component';
import { BookPageComponent } from './content/pages/book-page/book-page.component';
import { ErrorComponent } from './content/pages/error/error.component';
import { BooksPageComponent } from './content/pages/books-page/books-page.component';
import { BookfundsPageComponent } from './content/pages/bookfunds-page/bookfunds-page.component';
import { GenresPageComponent } from './content/pages/genres-page/genres-page.component';
import { LibrariesPageComponent } from './content/pages/libraries-page/libraries-page.component';
import { PublishersPageComponent } from './content/pages/publishers-page/publishers-page.component';
import { NotfoundComponent } from './content/pages/error/notfound/notfound.component';
import { PagesComponent } from './content/pages/pages.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsPageComponent,
    BookfundPageComponent,
    BookPageComponent,
    ErrorComponent,
    BooksPageComponent,
    BookfundsPageComponent,
    GenresPageComponent,
    LibrariesPageComponent,
    PublishersPageComponent,
    NotfoundComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
