import { Component, OnInit } from '@angular/core';
import {  Input, EventEmitter, Output } from '@angular/core';
import { SortableColumn} from "../sortable-column";
import {CustomSortingService} from "../custom-sorting.service";


@Component({
  selector: 'app-sortable-headers',
  templateUrl: './sortable-headers.component.html',
  styleUrls: ['./sortable-headers.component.css']
})
export class SortableHeadersComponent implements OnInit {

  @Input() sortableColumns: Array<SortableColumn>;
  @Output() sortEvent: EventEmitter<SortableColumn> = new EventEmitter<SortableColumn>();

  constructor(
    private sortingService: CustomSortingService
  ) { }

  ngOnInit(): void {
  }

  sort(column: SortableColumn): void {
    column.toggleDirection();
      this.sortEvent.emit(column);
  }

}
