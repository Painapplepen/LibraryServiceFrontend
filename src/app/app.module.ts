import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksPageComponent } from './content/pages/books-page/books-page.component';
import { BookfundsPageComponent } from './content/pages/bookfunds-page/bookfunds-page.component';
import { GenresPageComponent } from './content/pages/genres-page/genres-page.component';
import { LibrariesPageComponent } from './content/pages/libraries-page/libraries-page.component';
import { PublishersPageComponent } from './content/pages/publishers-page/publishers-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksPageComponent,
    BookfundsPageComponent,
    GenresPageComponent,
    LibrariesPageComponent,
    PublishersPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
