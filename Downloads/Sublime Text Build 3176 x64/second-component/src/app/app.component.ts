import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})




export class AppComponent implements OnInit {
title: string;
constructor (private router: Router) {
	
}

ngOnInit() {
	if(this.router.url == '/' ) { 
	this.title = '';
	}

}
  
}