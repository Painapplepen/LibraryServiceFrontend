import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthorsPageComponent } from "./authors-page/authors-page.component";
import { BookfundsPageComponent } from "./bookfunds-page/bookfunds-page.component";
import { BooksPageComponent } from "./books-page/books-page.component";
import { GenresPageComponent } from "./genres-page/genres-page.component";
import { LibrariesPageComponent } from "./libraries-page/libraries-page.component";
import { PagesComponent } from "./pages.component";
import { PublishersPageComponent } from "./publishers-page/publishers-page.component";

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      {
        path: "bookfunds",
        component: BookfundsPageComponent
      },
      {
        path: "books",
        component: BooksPageComponent
      },
      {
        path: "authors",
        component: AuthorsPageComponent
      },
      {
        path: "genres",
        component: GenresPageComponent
      },
      {
        path: "libraries",
        component: LibrariesPageComponent
      },
      {
        path: "Publishers",
        component: PublishersPageComponent
      }
    ]
  },
  {
    path: "**",
    redirectTo: "",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
