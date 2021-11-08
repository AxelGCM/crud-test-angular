import { ShowComponent } from './Administrator/show/show.component';
import { AdministratorService } from './administrator.service';
import { ServiceService } from './Service/service.service';
import { IndexComponent } from './Administrator/index/index.component';
import { EditComponent } from './Administrator/edit/edit.component';
import { AddComponent } from './Administrator/add/add.component';
import { ListarComponent } from './Administrator/listar/listar.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path:'listar',component:ListarComponent},
  {path:'add',component:AddComponent},
  {path:'edit',component:EditComponent},
  {path:'show',component:ShowComponent},
  {path:'',component:IndexComponent},
  {path:'#',pathMatch:'full',redirectTo:'listar'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule],

  exports: [RouterModule],
  providers: [ServiceService]
})
export class AppRoutingModule { }
