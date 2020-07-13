import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadSettings();
  }
  double: boolean = false;
  background: string = "bg-white";
  msg: string;

  // Load settings
  loadSettings() {
    var double = localStorage.getItem("ebooks-set-double");
    var background = localStorage.getItem("ebooks-set-background");
    if(double && JSON.parse(double)) {
      this.double = JSON.parse(double)
    }
    if (background) {
      this.background = background;
    }
  }

  save() {
    localStorage.setItem("ebooks-set-double", JSON.stringify(this.double));
    localStorage.setItem("ebooks-set-background", this.background);
    this.msg = "Settings saved successfully"
  }
}
