import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent{
  constructor(private router:Router){}

  Listar(){
    this.router.navigate(["listar"]);
  }


}
