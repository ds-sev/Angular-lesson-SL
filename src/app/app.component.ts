import {Component, OnInit} from '@angular/core'
import {BooksService} from './data/books.service'
import {IBook} from "./interface/book";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Book$tore';
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
