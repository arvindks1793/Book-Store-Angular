import { Component, OnInit } from '@angular/core';
import { BookDetailsComponent } from '../book-details/book-details.component';
import { Book } from "../book";
import { Observable } from "rxjs";
import { BookService } from "../book.service";
import { Router } from '@angular/router';
import  { Sort } from '../sort';
import { SortableColumn} from "../sortable-column";
import {CustomSortingService} from "../custom-sorting.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

   books: Observable<Book[]>;

  page = 1;
  count = 0;
  pageSize = 5;
  pageSizes = [5,10,15];
  //sort: Sort;
  sortableColumns: Array<SortableColumn> = [
    new SortableColumn('title', 'Title', 'asc'),
    new SortableColumn('category', 'Category', 'null'),
    new SortableColumn('authorName', 'Author', 'null'),
    new SortableColumn('publicationDate', 'Date', 'null')
  ];

  constructor(private bookService: BookService, private sortingService:CustomSortingService, 
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  getRequestParams( page, pageSize) {
  
    let params = {};

    if (page) {
      params[`page`] = page - 1;
    }

    if (pageSize) {
      params[`size`] = pageSize;
    }

    return params;
  }

  reloadData() {
    let column = this.sortingService.getSortableColumn(this.sortableColumns);
    console.log("sortable columns======="+column.title);
    const params = this.getRequestParams( this.page, this.pageSize);
     this.bookService.getBookList(params,column)
     .subscribe(
      response =>{
        const{books,totalItems} = response;
        this.books = books;
        this.count = totalItems;
        console.log(response);
      },
      error => {
        console.log(error);
      });
    
  }

  handlePageChange(event) {
    this.page = event;
    this.reloadData();
  }

  handlePageSizeChange(event) {
    this.pageSize = event.target.value;
    this.page = 1;
    this.reloadData();
  }
  public sort(sortableColumn: SortableColumn): void {
    this.sortingService.clearPreviousSorting(sortableColumn, this.sortableColumns);
    this.reloadData();
  }




  deleteBook(id: number) {
    this.bookService.deleteBook(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  bookDetails(id: number){
    this.router.navigate(['details', id]);
  }

}
