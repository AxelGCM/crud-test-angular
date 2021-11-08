import { AddComponent } from './Administrator/add/add.component';
import { EditComponent } from './Administrator/edit/edit.component';
import { ListarComponent } from './Administrator/listar/listar.component';
import { ServiceService } from './Service/service.service';
import { AdministratorService } from './administrator.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { IndexComponent } from './Administrator/index/index.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ShowComponent } from './Administrator/show/show.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ListarComponent,
    EditComponent,
    ShowComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
