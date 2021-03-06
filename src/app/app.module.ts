import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RootComponent } from './pages/root/root.component';
import { HeaderComponent } from './components/header/header.component';
import { EquipeComponent } from './components/equipe/equipe.component';
import { ProjetoComponent } from './components/projeto/projeto.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcoesComponent } from './pages/acoes/acoes.component';
import { AcoesDoBahiaComponent } from './components/acoes/acoes.component';
import { ConteudoAcoesComponent } from './components/conteudo-acoes/conteudo-acoes.component';
import { BannerLinkComponent } from './components/banner-link/banner-link.component';
import { FutebolBrasileiroComponent } from './pages/futebol-brasileiro/futebol-brasileiro.component';
import { ConteudoFutebolComponent } from './components/conteudo-futebol/conteudo-futebol.component';
import { NaoFutebolComponent } from './components/nao-futebol/nao-futebol.component';
import { FooterComponent } from './components/footer/footer.component';
import { FotoEquipeComponent } from './components/foto-equipe/foto-equipe.component';

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    AcoesComponent,
    AcoesDoBahiaComponent,
    HeaderComponent,
    BannerComponent,
    ProjetoComponent,
    EquipeComponent,
    ConteudoAcoesComponent,
    BannerLinkComponent,
    FutebolBrasileiroComponent,
    ConteudoFutebolComponent,
    NaoFutebolComponent,
    FooterComponent,
    FotoEquipeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, NgbCarouselModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
