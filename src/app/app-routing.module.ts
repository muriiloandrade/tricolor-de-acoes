import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcoesComponent } from './pages/acoes/acoes.component';
import { RootComponent } from './pages/root/root.component';

const routes: Routes = [
  { path: '', component: RootComponent },
  { path: 'acoes-do-bahia', component: AcoesComponent },
  { path: '**', component: RootComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
