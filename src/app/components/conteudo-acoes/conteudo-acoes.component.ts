import { Component, OnInit } from '@angular/core';
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-conteudo-acoes',
  templateUrl: './conteudo-acoes.component.html',
  styleUrls: ['./conteudo-acoes.component.css'],
})
export class ConteudoAcoesComponent implements OnInit {
  twitter = faTwitter;
  facebook = faFacebook;
  youtube = faYoutube;
  instagram = faInstagram;

  constructor() {}

  ngOnInit(): void {}
}
