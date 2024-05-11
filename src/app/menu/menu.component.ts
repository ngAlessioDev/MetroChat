import { Component } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
link_menu_1: string;
link_menu_2: string;
link_menu_3: string;


title: string;
constructor(){
  this.title = 'MetroChat';
  this.link_menu_1 ="Home";
  this.link_menu_2 ="Treni";
  this.link_menu_3 ="Preferiti";
 
}}