import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { CarouselModule } from 'ngx-owl-carousel-o';




import { MenuComponent } from './menu/menu.component';
import { InfoComponent } from './info/info.component';
import { CalendarComponent } from './calendar/calendar.component';
import { TabsComponent } from './tabs/tabs.component';
import { AmenidadesComponent } from './amenidades/amenidades.component';
import { OpinionesComponent } from './opiniones/opiniones.component';
import { SliderComponent } from './slide/slider/slider.component';




@NgModule({
  declarations: [
    MenuComponent,
    InfoComponent,
    CalendarComponent,
    TabsComponent,
    AmenidadesComponent,
    OpinionesComponent,
    SliderComponent
  
   

  ],
  exports:[
    MenuComponent,
    InfoComponent,
    CalendarComponent,
    AmenidadesComponent,
    OpinionesComponent,
    SliderComponent
  

  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    CarouselModule

   
  ]
})
export class SharedModule { }
