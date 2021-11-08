import { HttpErrorResponse } from '@angular/common/http';
import { Administrator } from './../../administrator';
import { ServiceService } from './../../Service/service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  statusValue: String = "login.png";
  administrator: Administrator = new Administrator();
  constructor(private router: Router, private service:ServiceService) { }

  ngOnInit(): void {

  }
  Listar(){
    this.router.navigate(["listar"]);
  }

  public Guardar(administrator: Administrator) : void{
    administrator.icon = "login.png"
    this.service.addAdministrator(administrator)
    .subscribe(data =>{
      this.router.navigate(["listar"]);
    })
  }

}
