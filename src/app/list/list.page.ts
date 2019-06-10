import { Component, OnInit } from '@angular/core';
import { Playlist }from '../model/Playlist';
import {Channel} from '../model/Channel';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
	playlist;
	
  constructor() {
  	this.load();
   }

  ngOnInit() {
  }
  
  load(){
  }
}
