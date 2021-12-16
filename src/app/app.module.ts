import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';



// MODULE OF PRIMENG


// PRINCIPAL PAGES





@NgModule({
  declarations: [
    AppComponent
   
  ],
  imports: [
    BrowserModule,
    SharedModule,
    PrimeNgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
