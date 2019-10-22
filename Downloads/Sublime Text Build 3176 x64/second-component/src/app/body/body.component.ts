import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  constructor(private router: Router) { }
  body: string;
  ngOnInit() {
  this.render();
  }

  render() {
  if(this.router.url === "/") { 

  this.body = "solo il body";

  console.log("pero!"); 

        } 
  }

}
