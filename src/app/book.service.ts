import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SortableColumn} from "./sortable-column";

const baseUrl = window["cfgApiBaseUrl"] + "/books";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  

  constructor(private http: HttpClient) { }

  getBook(id: number): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }


  deleteBook(id: number): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`, { responseType: 'text' });
  }

  getBookList(params,column): Observable<any> {
    console.log(baseUrl+
      "?"+"pageSize="+params.size+
      "&"+"pageNo="+params.page +
      this.getSortParameters(column))
    return this.http.get(baseUrl+
      "?"+"pageSize="+params.size+
      "&"+"pageNo="+params.page +
      this.getSortParameters(column));   
  }

  private getSortParameters(sortableColumn: SortableColumn):string {
    if(sortableColumn == null) {
       return '&sortBy=id';
    }
     return '&sortBy=' + sortableColumn.name +'&sortDirection='+ sortableColumn.direction;
  }
}
