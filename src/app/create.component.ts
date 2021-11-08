import { AdministratorService } from './administrator.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Administrator } from 'src/app/administrator';

@Component({
  selector: 'app-root',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./app.component.css']
})
export class addComponent implements OnInit{

  public administrators: Administrator[] | undefined;
  constructor(private administratorService: AdministratorService){}

  ngOnInit(){
    this.getAdministrators();
  }

  public getAdministrators(): void {
    this.administratorService.getAdministrators().subscribe(
      (response: Administrator[]) => {
          this.administrators = response;
      },
      (error: HttpErrorResponse) => {
          alert(error.message);
      }
    );
  }

}
