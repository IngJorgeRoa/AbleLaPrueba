import { Component } from '@angular/core';

@Component({
  selector: 'app-amenidades',
  templateUrl: './amenidades.component.html',
  styleUrls: ['./amenidades.component.css']
})
export class AmenidadesComponent{

 listapadre: string[] = ['ACEPTA RESERVACIONES','ACEPTA TARJETA DE CREDITO Y DEBITO','CABLE TV','ESTACIONAMIENTO CERCANO',
                         'MÚSICA','SALÓN PRIVADO','TERRAZA O JARDÍN','VALET PARKING','WI-FI GRATUITO','ZONA PARA FUMAR'];


  
}
