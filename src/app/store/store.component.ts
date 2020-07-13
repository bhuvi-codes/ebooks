import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor(private httpobj: HttpClient) { }

  // Load store books on init
  ngOnInit(): void {
    this.getbooks();
  }
  storebooks: any[] = [];

  // Fetches the store books
  // - loads the library books from localStorage
  // - loads the store books from JSON file
  // - updates the store books with "added" field if its in library
  getbooks() {
    var lbooks = this.getlibbooks();
    var lbooksid = []
    for (var i: number = 0; i < lbooks.length; i++) {
      lbooksid.push(lbooks[i].id);
    }

    this.httpobj.get('/assets/books.json').subscribe(response => {
      var tempbooks: any[] = response as string[];
      for (var i: number = 0; i < tempbooks.length; i++) {
        if (lbooksid.includes(tempbooks[i].id)) {
          tempbooks[i].added = true;
        }
      }
      this.storebooks = tempbooks;
    })
  }

  // Fetches the library books
  // - loads the library books from localStorage
  getlibbooks() {
    var lbooks = [];
    var lbooksstr = localStorage.getItem("ebooks-lbooks");
    if (lbooksstr != null) {
      lbooks = JSON.parse(lbooksstr);
    }
    return lbooks
  }

  // Adds the book into library
  // - mark the entry in storebooks array as added
  // - loads library books from localStorage and updates it, sets it back to localStorage
  add(book: any) {
    for (var i: number = 0; i < this.storebooks.length; i++) {
      if (book.id == this.storebooks[i].id) {
        this.storebooks[i].added = true;
        // forces refresh of data binding
        this.storebooks = this.storebooks.slice(0, this.storebooks.length)
      }
    }
    var lbooks = [];
    var lbooksstr = localStorage.getItem("ebooks-lbooks");
    if (lbooksstr != null) {
      lbooks = JSON.parse(lbooksstr);
    }
    lbooks.push(book);
    localStorage.setItem("ebooks-lbooks", JSON.stringify(lbooks))
  }
}
