import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// COMPONENTES 
import { NavbarComponent } from './cliente/Components/GeneralComponects/navbar/navbar.component';
import { CardComponent } from './cliente/Components/GeneralComponects/card/card.component';
import { FooterComponent } from './cliente/Components/GeneralComponects/footer/footer.component';
import { PromoComponent } from './cliente/Components/GeneralComponects/promo/promo.component';
import { GeographiclocationComponent } from './cliente/Components/InicioComponents/geographiclocation/geographiclocation.component';
import { FormAskerComponent } from './cliente/Components/InicioComponents/form-asker/form-asker.component';
import { CardTestimonioComponent } from './cliente/Components/GeneralComponects/card-testimonio/card-testimonio.component';



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
import { VistadminComponent } from './admin/vistadmin/vistadmin.component';
import { VistaproductosComponent } from './admin/vistaproductos/vistaproductos.component';
import { SteppeComponent } from './cliente/Components/InicioComponents/steppe/steppe.component';

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
    VistadminComponent,
    VistaproductosComponent,
    SteppeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
