import { NgModule } from '@angular/core';

//PrimeNg
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';

//Carousel
import {CarouselModule} from 'primeng/carousel';

//calendar
import {CalendarModule} from 'primeng/calendar';

//tabs angular
import {TabViewModule} from 'primeng/tabview';





@NgModule({
  exports: [
    ButtonModule,
    MenubarModule,
    CarouselModule,
    TabViewModule,
    CalendarModule
  ],

})
export class PrimeNgModule { }
