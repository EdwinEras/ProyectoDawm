import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';




import { HomeComponentComponent } from './cliente/PagComponents/home-component/home-component.component';
import { ContactoComponentComponent } from './cliente/PagComponents/contacto-component/contacto-component.component';
import { TiendaComponentComponent } from './cliente/PagComponents/tienda-component/tienda-component.component';
import { NoticiasComponentComponent } from './cliente/PagComponents/noticias-component/noticias-component.component';
import { LoginComponentComponent } from './PagComponents/login-component/login-component.component';
import { RegistrarComponentComponent } from './PagComponents/registrar-component/registrar-component.component';
import { FathercomponentclientComponent } from './cliente/PagComponents/fathercomponentclient/fathercomponentclient.component';
import { FathercomponentadminComponent } from './admin/PagComponents/fathercomponentadmin/fathercomponentadmin.component';


const rutas:Routes =[
  {
    path:'',
    pathMatch:'full',
    redirectTo:'c/Inicio'
  },{
    path:'c',
    component:FathercomponentclientComponent, 
    children: [
      {
        path:'',
        pathMatch:'prefix',
        redirectTo:'Inicio'
      },{
        path:'Tienda',
        component:TiendaComponentComponent
      },{
        path:'Inicio',
        component:HomeComponentComponent
      },{
        path:'Contactos',
        component:ContactoComponentComponent
      },{
        path:'Noticias',
        component:NoticiasComponentComponent
      }
    ]
  },{
    path:'a',
    component: FathercomponentadminComponent
  },{
    path:'Login',
    component:LoginComponentComponent
  },{
    path:'Registrar',
    component:RegistrarComponentComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(rutas,{
    enableTracing:true,
    paramsInheritanceStrategy:'always',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
