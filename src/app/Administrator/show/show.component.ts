import { HttpErrorResponse } from '@angular/common/http';
import { Administrator } from './../../administrator';
import { Router } from '@angular/router';
import { ServiceService } from './../../Service/service.service';
import { Component, OnInit } from '@angular/core';
import { Version } from '@angular/compiler';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})

export class ShowComponent implements OnInit {
  administrator: Administrator = new Administrator();
  constructor(private service: ServiceService, private router:Router){}

  Edit(administrator: Administrator): void{
    localStorage.setItem("id",administrator.id.toString());
    this.router.navigate(["edit"]);
  }

  ngOnInit(): void {
    this.Ver();
  }

  Listar(){
    this.router.navigate(["listar"]);
  }

  Ver(){
    let administratorId= Number(localStorage.getItem("id"));
    this.service.showAdministrator(administratorId).subscribe(
      (response: Administrator) => {
          this.administrator = response;
      },
      (error: HttpErrorResponse) => {
          alert(error.message);
      }
    );
  }
}
