import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreniComponent } from './treni/treni.component';
import { LucicasaComponent } from './lucicasa/lucicasa.component';

const routes: Routes = [
  
  { path: 'luci', component: LucicasaComponent },
  { path: 'treni', component: TreniComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
