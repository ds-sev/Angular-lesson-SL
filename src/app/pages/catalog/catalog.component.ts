import {Component, OnInit} from '@angular/core';
import {IBook} from "../../interface/book";
import {BooksService} from "../../data/books.service";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  books: IBook[] = []

  constructor(private _productService: BooksService) {
  }

  ngOnInit(): void {
    this._productService.getList()
        .subscribe(response => {
          this.books = response.data
        })
  }
}
