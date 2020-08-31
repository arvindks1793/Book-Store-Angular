import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BookService } from "./book.service";
import { CustomSortingService } from "./custom-sorting.service";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { SortableHeadersComponent } from './sortable-headers/sortable-headers.component';


@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookDetailsComponent,
    SortableHeadersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [BookService,CustomSortingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
