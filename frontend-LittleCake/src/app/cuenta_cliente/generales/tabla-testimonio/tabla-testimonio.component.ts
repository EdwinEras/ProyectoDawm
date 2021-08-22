import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-tabla-testimonio',
  templateUrl: './tabla-testimonio.component.html',
  styleUrls: ['./tabla-testimonio.component.css']
})
export class TablaTestimonioComponent implements OnInit {
  mandar:any=[];
  flag = true;
  constructor(private restService:RestService ) { }

  ngOnInit(): void {
    this.cargarTestimonios();
  }
  url:string='http://localhost:3000/testimonio';

  public cargarTestimonios(){
    this.restService.get(this.url).subscribe( 
    Response => {
      this.mandar=Response;
      console.log(this.mandar);
      },
      Error => {
        console.log(Error);
      });
    }
    public eliminarTestimonio(identificador:String){
      const urldelete=this.url + '/'+identificador;
      console.log(urldelete);
      this.restService.delete(urldelete).subscribe( 
        Response => {
          this.flag=false;
          this.cargarTestimonios();
          setTimeout(()=>{this.flag=true},2000);
        },
          Error => {
            console.log(Error);
          });        
      };

  

}
