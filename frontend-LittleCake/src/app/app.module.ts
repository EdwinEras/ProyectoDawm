import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { NgApexchartsModule } from "ng-apexcharts";
// COMPONENTES 

import { NavbarComponent } from './cliente/Components/GeneralComponects/navbar/navbar.component';
import { CardComponent } from './cliente/Components/GeneralComponects/card/card.component';
import { FooterComponent } from './cliente/Components/GeneralComponects/footer/footer.component';
import { PromoComponent } from './cliente/Components/GeneralComponects/promo/promo.component';
import { GeographiclocationComponent } from './cliente/Components/InicioComponents/geographiclocation/geographiclocation.component';
import { FormAskerComponent } from './cuenta_cliente/generales/form-asker/form-asker.component';
import { CardTestimonioComponent } from './cliente/Components/GeneralComponects/card-testimonio/card-testimonio.component';
import { GraficosComponent } from './admin/Components/graficos-admin/graficos/graficos.component';




// COMPONENTES DE PAGINAS

import { HomeComponentComponent } from './cliente/PagComponents/home-component/home-component.component';
import { ContactoComponentComponent } from './cliente/PagComponents/contacto-component/contacto-component.component';
import { TiendaComponentComponent } from './cliente/PagComponents/tienda-component/tienda-component.component';
import { NoticiasComponentComponent } from './cliente/PagComponents/noticias-component/noticias-component.component';
import { LoginComponentComponent } from './PagComponents/login-component/login-component.component';
import { RegistrarComponentComponent } from './PagComponents/registrar-component/registrar-component.component';
import { FathercomponentclientComponent } from './cliente/PagComponents/fathercomponentclient/fathercomponentclient.component';
import { FathercomponentadminComponent } from './admin/PagComponents/fathercomponentadmin/fathercomponentadmin.component';
import { TableComponentComponent } from './cliente/Components/ContactoComponents/table-component/table-component.component';
import { VistaproductosComponent } from './admin/vistaproductos/vistaproductos.component';
import { SteppeComponent } from './cliente/Components/InicioComponents/steppe/steppe.component';
import { AggNoticiasComponent } from './admin/agg-noticias/agg-noticias.component';
import { AggProductosComponent } from './admin/agg-productos/agg-productos.component';
import { FooterAdminComponent } from './admin/Components/footer-admin/footer-admin.component';
import { NavbarAdminComponent } from './admin/Components/navbar-admin/navbar-admin.component';
import { NavbarAdminSuperiorComponent } from './admin/Components/navbar-admin-superior/navbar-admin-superior.component';
import { PanelDeControlComponent } from './admin/PagComponents/panel-de-control/panel-de-control.component';
import { GraficosVentasComponent } from './admin/Components/graficos-admin/graficos-ventas/graficos-ventas.component';
import { CrudproductosComponent } from './admin/PagComponents/crudproductos/crudproductos.component';
import { CrudcategoriaComponent } from './admin/PagComponents/crudcategoria/crudcategoria.component';
import { CrudOfertasComponent } from './admin/PagComponents/crud-ofertas/crud-ofertas.component';
import { CrudnoticiaComponent } from './admin/PagComponents/crudnoticia/crudnoticia.component';
import { NabvarComponent } from './cuenta_cliente/generales/nabvar/nabvar.component';
import { DashboardComponent } from './cuenta_cliente/PagComponents/dashboard/dashboard.component';
import { EstadisticasComponent } from './cuenta_cliente/PagComponents/estadisticas/estadisticas.component';
import { MisPedidosComponent } from './cuenta_cliente/PagComponents/mis-pedidos/mis-pedidos.component';
import { TestimoniosComponent } from './cuenta_cliente/PagComponents/testimonios/testimonios.component';
import { FatherComponentsComponent } from './cuenta_cliente/PagComponents/father-components/father-components.component';
import { TablaTestimonioComponent } from './cuenta_cliente/generales/tabla-testimonio/tabla-testimonio.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    FooterComponent,
    PromoComponent,
    GeographiclocationComponent,
    FormAskerComponent,
    HomeComponentComponent,
    ContactoComponentComponent,
    TiendaComponentComponent,
    NoticiasComponentComponent,
    LoginComponentComponent,
    RegistrarComponentComponent,
    FathercomponentclientComponent,
    FathercomponentadminComponent,
    TableComponentComponent,
    CardTestimonioComponent,
    VistaproductosComponent,
    SteppeComponent,
    GraficosComponent,
    AggNoticiasComponent,
    AggProductosComponent,
    FooterAdminComponent,
    NavbarAdminComponent,
    NavbarAdminSuperiorComponent,
    PanelDeControlComponent,
    GraficosVentasComponent,
    CrudproductosComponent,
    CrudcategoriaComponent,
    CrudOfertasComponent,
    CrudnoticiaComponent,
    NabvarComponent,
    DashboardComponent,
    EstadisticasComponent,
    MisPedidosComponent,
    TestimoniosComponent,
    FatherComponentsComponent,
    TablaTestimonioComponent,

  ],
  imports: [
    NgApexchartsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
