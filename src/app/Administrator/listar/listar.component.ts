import { Router } from '@angular/router';
import { ServiceService } from './../../Service/service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AdministratorService } from './../../administrator.service';
import { Administrator } from './../../administrator';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  public administrators: Administrator[] | undefined;
  constructor(private service: ServiceService, private router:Router){}

  ngOnInit(){
    this.getAdministrators();
  }

  Nuevo(){
    this.router.navigate(["add"]);
  }

  Listar(){
    this.router.navigate(["listar"]);
  }

  Edit(adminstrator: Administrator): void{
    localStorage.setItem("id",adminstrator.id.toString());
    this.router.navigate(["edit"]);
  }

  Show(administrator: Administrator): void{
    localStorage.setItem("id",administrator.id.toString());
    this.router.navigate(["show"]);
  }

  public getAdministrators(): void {
    this.service.getAdministrators().subscribe(
      (response: Administrator[]) => {
          this.administrators = response;
      },
      (error: HttpErrorResponse) => {
          alert(error.message);
      }
    );
  }

  Delete(administrator: Administrator){
    this.service.deleteAdministrator(administrator.id).subscribe(
      data => {
          this.administrators=this.administrators?.filter(p=>p!==administrator);
      }
    );
  }
}
