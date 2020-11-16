import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcoesComponent } from './pages/acoes/acoes.component';
import { FutebolBrasileiroComponent } from './pages/futebol-brasileiro/futebol-brasileiro.component';
import { RootComponent } from './pages/root/root.component';

const routes: Routes = [
  { path: '', component: RootComponent },
  { path: 'acoes-do-bahia', component: AcoesComponent },
  { path: 'futebol-brasileiro', component: FutebolBrasileiroComponent },
  { path: '**', component: RootComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
