import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ServiceService } from './../../Service/service.service';
import { Administrator } from './../../administrator';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  statusTemplate: String = "";
  administrator: Administrator = new Administrator();
  constructor(private service: ServiceService, private router:Router){}

  ngOnInit(): void {
    this.Editar();
  }

  Listar(){
    this.router.navigate(["listar"]);
  }


  Editar(){
    let administratorId= Number(localStorage.getItem("id"));
    this.service.showAdministrator(administratorId).subscribe(
      (response: Administrator) => {
          this.administrator = response;
          if(this.administrator.status == true){
            this.statusTemplate = "Activo";
          }else{
            this.statusTemplate = "Inactivo";
          }
      },
      (error: HttpErrorResponse) => {
          alert(error.message);
      }
    );
  }

  Actualizar(administrator: Administrator): void{
    if(this.statusTemplate == "Activo"){
      administrator.status = true;
    }else{
      administrator.status = false;
    }
    this.service.updateAdministrator(administrator)
      .subscribe(data=>{
        this.administrator = data;
        this.router.navigate(["listar"]);
      }

    )
  }

}
