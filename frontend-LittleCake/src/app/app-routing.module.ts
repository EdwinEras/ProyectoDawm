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
import { DashboardComponent } from './cuenta_cliente/PagComponents/dashboard/dashboard.component';
import { EstadisticasComponent } from './cuenta_cliente/PagComponents/estadisticas/estadisticas.component';
import { MisPedidosComponent } from './cuenta_cliente/PagComponents/mis-pedidos/mis-pedidos.component';
import { TestimoniosComponent } from './cuenta_cliente/PagComponents/testimonios/testimonios.component';
import { FatherComponentsComponent } from './cuenta_cliente/PagComponents/father-components/father-components.component';
import { FormAskerComponent } from './cuenta_cliente/generales/form-asker/form-asker.component';
import { TablaTestimonioComponent } from './cuenta_cliente/generales/tabla-testimonio/tabla-testimonio.component';
import { CrudproductosComponent } from './admin/PagComponents/crudproductos/crudproductos.component';
import { CrudcategoriaComponent } from './admin/PagComponents/crudcategoria/crudcategoria.component';
import { CrudnoticiaComponent } from './admin/PagComponents/crudnoticia/crudnoticia.component';
import { BarComponent } from './admin/PagComponents/graficos/bar/bar.component';
import { PieComponent } from './admin/PagComponents/graficos/pie/pie.component';
import { ScatterComponent } from './admin/PagComponents/graficos/scatter/scatter.component';
const rutas: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'v/Inicio',
  },
  {
    path: 'c',
    component: FatherComponentsComponent,
    children: [
      {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'Dashboard',
      },
      {
        path: 'Dashboard',
        component: DashboardComponent,
      },
      {
        path: 'Estadisticas',
        component: EstadisticasComponent,
      },
      {
        path: 'Mis Pedidos',
        component: MisPedidosComponent,
      },
      {
        path: 'Testimonios',
        component: TestimoniosComponent,
        children: [
          {
            path: '',
            pathMatch: 'prefix',
            redirectTo: 'Listado',
          },
          {
            path: 'Listado',
            component: TablaTestimonioComponent,
          },
          {
            path: 'Agregar',
            component: FormAskerComponent,
          },
          {
            path: 'Editar/:idTestimonio',
            component: FormAskerComponent,
          },
        ],
      },
    ],
  },
  {
    path: 'v',
    component: FathercomponentclientComponent,
    children: [
      {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'Inicio',
      },
      {
        path: 'Tienda',
        component: TiendaComponentComponent,
      },
      {
        path: 'Inicio',
        component: HomeComponentComponent,
      },
      {
        path: 'Contactos',
        component: ContactoComponentComponent,
      },
      {
        path: 'Noticias',
        component: NoticiasComponentComponent,
      },
    ],
  },
  {
    path: 'a',
    component: FathercomponentadminComponent,
    children: [
      {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'PanelDeControl',
      },
      {
        path: 'Productos',
        component: CrudproductosComponent,
      },
      {
        path: 'Categorias',
        component: CrudcategoriaComponent,
      },
      {
        path: 'Noticias',
        component: CrudnoticiaComponent,
      },
      {
        path: 'PanelDeControl',
        component: PanelDeControlComponent,
      },
      {
        path: 'AggNoticias',
        component: AggNoticiasComponent,
      },
      {
        path: 'GraficosVentas',
        component: GraficosVentasComponent,
      },
      {
        path: 'AggProductos',
        component: AggProductosComponent,
      },
      {
        path: 'AggNoticias',
        component: AggNoticiasComponent,
      },
      {
        path: 'editProducto/:id',
        component: AggProductosComponent,
      },
      {
        path: 'editNoticia/:id',
        component: AggNoticiasComponent,
      },
      {
        path: 'Graficos',
        component: GraficosComponent,
      },{
        path: 'barChart',
        component: BarComponent,
      },{
        path: 'pieChart',
        component: PieComponent,
      },{
        path: 'scatterChart',
        component: ScatterComponent,
      },
    ],
  },
  {
    path: 'Login',
    component: LoginComponentComponent,
  },
  {
    path: 'Registrar',
    component: RegistrarComponentComponent,
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(rutas, {
      enableTracing: false,
      paramsInheritanceStrategy: 'always',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
