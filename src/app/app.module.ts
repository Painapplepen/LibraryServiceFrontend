import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksPageComponent } from './content/pages/books-page/books-page.component';
import { BookfundsPageComponent } from './content/pages/bookfunds-page/bookfunds-page.component';
import { GenresPageComponent } from './content/pages/genres-page/genres-page.component';
import { LibrariesPageComponent } from './content/pages/libraries-page/libraries-page.component';
import { PublishersPageComponent } from './content/pages/publishers-page/publishers-page.component';
import { HeaderComponent } from './content/layout/header/header.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FooterComponent } from './content/layout/footer/footer.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './core/guards/auth.guard';
import { AuthService } from './core/auth/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginPageComponent } from './content/pages/login-page/login-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomePageComponent } from './content/pages/home-page/home-page.component';
import { PaginationComponent } from './content/layout/pagination/pagination.component';
import { SpinnerComponent } from './content/layout/spinner/spinner.component';
import { AuthInterseptor } from './core/auth/auth.interseptor';
import { PublishersPageDetailComponent } from './content/pages/publishers-page/publishers-page-detail/publishers-page-detail.component';
import { GenresPageDetailComponent } from './content/pages/genres-page/genres-page-detail/genres-page-detail.component';
import { BookfundsPageDetailComponent } from './content/pages/bookfunds-page/bookfunds-page-detail/bookfunds-page-detail.component';
import { BooksPageDetailComponent } from './content/pages/books-page/books-page-detail/books-page-detail.component';
import { LibrariesPageDetailComponent } from './content/pages/libraries-page/libraries-page-detail/libraries-page-detail.component';
import { AuthorsPageDetailComponent } from './content/pages/authors-page/authors-page-detail/authors-page-detail.component';
import { AuthorsPageComponent } from './content/pages/authors-page/authors-page.component';


@NgModule({
  declarations: [
    AppComponent,
    BooksPageComponent,
    BookfundsPageComponent,
    GenresPageComponent,
    LoginPageComponent,
    HomePageComponent,
    LibrariesPageComponent,
    PublishersPageComponent,
    HeaderComponent,
    FooterComponent,
    PaginationComponent,
    SpinnerComponent,
    PublishersPageDetailComponent,
    GenresPageDetailComponent,
    BookfundsPageDetailComponent,
    BooksPageDetailComponent,
    LibrariesPageDetailComponent,
    AuthorsPageComponent,
    AuthorsPageDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [
    AuthGuard,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterseptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
