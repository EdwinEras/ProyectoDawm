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
import { PanelDeControlComponent } from './admin/PagComponents/panel-de-control/panel-de-control.component';
import { VistaproductosComponent } from './admin/vistaproductos/vistaproductos.component';
import { AggNoticiasComponent } from './admin/agg-noticias/agg-noticias.component';
import { AggProductosComponent } from './admin/agg-productos/agg-productos.component';
import { GraficosComponent } from './admin/Components/graficos-admin/graficos/graficos.component';
import { GraficosVentasComponent } from './admin/Components/graficos-admin/graficos-ventas/graficos-ventas.component';

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
        redirectTo:'PanelDeControl'
      },{
        path:'Productos',
        component:VistaproductosComponent
      },{
        path:'PanelDeControl',
        component:PanelDeControlComponent
      },{
        path:'AggNoticias',
        component:AggNoticiasComponent
      },{
        path:'GraficosVentas',
        component:GraficosVentasComponent
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
