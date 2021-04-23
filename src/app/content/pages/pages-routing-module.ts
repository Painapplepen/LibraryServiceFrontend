import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/core/guards/auth.guard";
import { AuthorsPageComponent } from "./authors-page/authors-page.component";
import { BookfundsPageComponent } from "./bookfunds-page/bookfunds-page.component";
import { BooksPageComponent } from "./books-page/books-page.component";
import { GenresPageComponent } from "./genres-page/genres-page.component";
import { LibrariesPageComponent } from "./libraries-page/libraries-page.component";
import { PagesComponent } from "./pages.component";
import { PublishersPageDetailComponent } from "./publishers-page/publishers-page-detail/publishers-page-detail.component";
import { PublishersPageListComponent } from "./publishers-page/publishers-page-list/publishers-page-list.component";
import { PublishersPageComponent } from "./publishers-page/publishers-page.component";

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      {
        path: "",
        redirectTo: "/admin/bookfunds",
        pathMatch: "full",
      },
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
        path: "publishers",
        component: PublishersPageComponent,
        children: [
          {path: "", redirectTo: "publishers/list", pathMatch: "full"},
          {path: "list", component: PublishersPageListComponent},
          {path: "detail", component: PublishersPageDetailComponent},
        ]
      }
    ],
    canActivate: [AuthGuard]
  },
  {
    path: "**",
    redirectTo: "bookfunds",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class PagesRoutingModule {
}
