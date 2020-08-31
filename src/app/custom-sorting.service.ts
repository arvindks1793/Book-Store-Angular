import { Injectable } from '@angular/core';
import {SortableColumn} from "./sortable-column";

@Injectable({
  providedIn: 'root'
})
export class CustomSortingService {

  constructor() { }


  public getSortableColumn(sortableColumns: SortableColumn[]): SortableColumn {
    console.log("in service======="+sortableColumns.length)
    return sortableColumns.find(
      column => column.direction != null
    );
  }
  public clearPreviousSorting(chosenColumn: SortableColumn, sortableColumns: SortableColumn[]) {
    sortableColumns.filter(
      column => column != chosenColumn
    ).forEach(
      column => column.direction = null
    );
  }
}
