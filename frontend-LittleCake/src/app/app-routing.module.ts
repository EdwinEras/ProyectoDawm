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
import { VistadminComponent } from './admin/vistadmin/vistadmin.component';
import { VistaproductosComponent } from './admin/vistaproductos/vistaproductos.component';
import { AggNoticiasComponent } from './admin/agg-noticias/agg-noticias.component';
import { AggVentasComponent } from './admin/agg-ventas/agg-ventas.component';
import { AggProductosComponent } from './admin/agg-productos/agg-productos.component';
import { GraficosComponent } from './admin/graficos/graficos.component';

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
    component: FathercomponentadminComponent,
    children: [
      {
        path:'',
        pathMatch:'prefix',
        redirectTo:'Inicio'
      },{
        path:'Productos',
        component:VistaproductosComponent
      },{
        path:'Inicio',
        component:VistadminComponent
      },{
        path:'AggNoticias',
        component:AggNoticiasComponent
      },{
        path:'Ventas',
        component:AggVentasComponent
      },{
        path:'AggProductos',
        component:AggProductosComponent
      },{
        path:'Graficos',
        component:GraficosComponent
      }
    ]
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
    enableTracing:false,
    paramsInheritanceStrategy:'always',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
