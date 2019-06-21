import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nuevo-post',
  templateUrl: './nuevo-post.component.html',
  styleUrls: ['./nuevo-post.component.css']
})
export class NuevoPostComponent implements OnInit {

  public name;
  public lastName;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  public saveUser() {
      console.log(this.name);
      console.log(this.lastName);
      this.router.navigate(['/']);
  }
}
