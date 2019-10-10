import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chutti-pagination',
  templateUrl: './chutti-pagination.component.html',
  styleUrls: ['./chutti-pagination.component.scss'],

})
export class ChuttiPaginationComponent implements OnInit {
  // public perpageOption = [
  //   { value: '10', label: '10' },
  //   { value: '20', label: '20' },
  //   { value: '50', label: '50' },
  //   { value: '100', label: '100' },
  //   { value: '500', label: '500' },
  // ];
  // selectedItemsPerPage :any;
  totalPages = 1;
  //input imported
  @Input() currentPage: number; // the current page
  @Input() count: number; // how many total items there are in all pages
  @Input() perPage: number; // how many items we want to show per page
  @Input() pagesToShow: number; // how many pages between next/prev
  @Input() loading: boolean; // check if content is being loaded
  //output imported
  @Output() goPrev = new EventEmitter<boolean>();
  @Output() goNext = new EventEmitter<boolean>();
  @Output() goPage = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
    this.perPage = 10;
    this.currentPage = 1;
    this.totalPages = this.count / this.perPage;
    
  }
  pagecount(itemsPerPage) {
    this.perPage = itemsPerPage;
    // this.selectedItemsPerPage = this.perPage;
  }
  onPrev(): void {
    this.goPrev.emit(true);
  }
  onNext(): void {
    this.goNext.emit(true);
  }
}
