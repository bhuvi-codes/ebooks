import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ebooks';
  ngOnInit(): void {
    var storeuser = sessionStorage.getItem("ebooks-username"); // fetching user id from sesion storage
    if (storeuser != null) {
      this.loggedin = true;
    }
  }
  username: string;
  pass: string;
  msg: string;
  loggedin: boolean = false;
  login() {
    this.msg = "";
    if ((this.username == "user") && (this.pass == "password")) {
      sessionStorage.setItem("ebooks-username", this.username);
      window.location.reload();
    }
    else{
      this.msg = "Invalid Username or Password";
    }
  }
  logout()
  {
    sessionStorage.removeItem("ebooks-username");
    window.location.reload();
  }
}
