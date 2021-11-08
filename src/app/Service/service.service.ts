
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Administrator } from 'src/app/administrator';

@Injectable({providedIn: 'root'})
export class ServiceService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private HttpClient: HttpClient){}

  public getAdministrators(): Observable<Administrator[]>{
    return this.HttpClient.get<Administrator[]>(`${this.apiServerUrl}/administrator/all`);
  }
  public addAdministrator(administrator: Administrator): Observable<Administrator>{
    return this.HttpClient.post<Administrator>(`${this.apiServerUrl}/administrator/add`, administrator);
  }

  public updateAdministrator(administrator: Administrator): Observable<Administrator>{
    return this.HttpClient.put<Administrator>(`${this.apiServerUrl}/administrator/update`, administrator);
  }

  public showAdministrator(administratorId: number): Observable<Administrator>{
    return this.HttpClient.get<Administrator>(`${this.apiServerUrl}/administrator/find/${administratorId}`);
  }

  public deleteAdministrator(administratorId: number): Observable<void>{
    return this.HttpClient.delete<void>(`${this.apiServerUrl}/administrator/delete/${administratorId}`);
  }
}
