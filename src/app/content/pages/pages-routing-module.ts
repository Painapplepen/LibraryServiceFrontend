import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/core/guards/auth.guard";
import { AuthorsPageDetailComponent } from "./authors-page/authors-page-detail/authors-page-detail.component";
import { AuthorsPageComponent } from "./authors-page/authors-page.component";
import { BookfundsPageDetailComponent } from "./bookfunds-page/bookfunds-page-detail/bookfunds-page-detail.component";
import { BookfundsPageComponent } from "./bookfunds-page/bookfunds-page.component";
import { BooksPageDetailComponent } from "./books-page/books-page-detail/books-page-detail.component";
import { BooksPageComponent } from "./books-page/books-page.component";
import { GenresPageDetailComponent } from "./genres-page/genres-page-detail/genres-page-detail.component";
import { GenresPageComponent } from "./genres-page/genres-page.component";
import { LibrariesPageDetailComponent } from "./libraries-page/libraries-page-detail/libraries-page-detail.component";
import { LibrariesPageComponent } from "./libraries-page/libraries-page.component";
import { PagesComponent } from "./pages.component";
import { PublishersPageDetailComponent } from "./publishers-page/publishers-page-detail/publishers-page-detail.component";
import { PublishersPageComponent } from "./publishers-page/publishers-page.component";

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      { path: "", redirectTo: "/admin/bookfunds", pathMatch: "full", },
      { path: "bookfunds", component: BookfundsPageComponent },
      { path: "bookfunddetail", component: BookfundsPageDetailComponent },
      { path: "books", component: BooksPageComponent },
      { path: "bookdetail", component: BooksPageDetailComponent },
      { path: "authors", component: AuthorsPageComponent },
      { path: "authordetail", component: AuthorsPageDetailComponent },
      { path: "genres", component: GenresPageComponent },
      { path: "genredetail", component: GenresPageDetailComponent },
      { path: "libraries", component: LibrariesPageComponent },
      { path: "librarydetail", component: LibrariesPageDetailComponent },
      { path: "publishers", component: PublishersPageComponent, },
      { path: "publisherdetail", component: PublishersPageDetailComponent }
    ],
    canActivate: [AuthGuard]
  },
  {
    path: "**",
    redirectTo: "bookfunds"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class PagesRoutingModule {
}
