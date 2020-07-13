import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  constructor() { }
  lbooks: any[] = [];
  openbook:any;
  // Load library books on init
  ngOnInit(): void {
    var lbooksstr = localStorage.getItem("ebooks-lbooks");
    if (lbooksstr != null) {
      this.lbooks = JSON.parse(lbooksstr);
    }
    this.loadSettings();
  }

  background:string = "bg-white";
  pageclass:string = "col-md-12";
  numpage:number = 1;
  // Load settings
  loadSettings() {
    var double = localStorage.getItem("ebooks-set-double");
    var background = localStorage.getItem("ebooks-set-background");
    if(JSON.parse(double))
    {
      this.numpage = 2;
      this.pageclass = "col-md-6";
    }
    if(background)
    {
      this.background = background;
    }
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

  // Remove the book from library
  // - remove the book from lbooks variable by matching id
  // - update it back to the localStorage
  remove(index: number) {
    this.lbooks.splice(index, 1);
    localStorage.setItem("ebooks-lbooks", JSON.stringify(this.lbooks));
  }
  p:number = 1;
  open(book:any)
  {
    this.openbook = book;
  }
}




