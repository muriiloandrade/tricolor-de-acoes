/* eslint-disable no-param-reassign */
import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-conteudo-futebol',
  templateUrl: './conteudo-futebol.component.html',
  styleUrls: ['./conteudo-futebol.component.css'],
  providers: [NgbCarouselConfig],
})
export class ConteudoFutebolComponent implements OnInit {
  imagens = [
    {
      src: 'assets/1.jpg',
      alt: 'Bahia',
    },
    {
      src: 'assets/2.jpg',
      alt: 'Vasco',
    },
    {
      src: 'assets/3.jpg',
      alt: 'Fluminense',
    },
    {
      src: 'assets/4.jpg',
      alt: 'Santos',
    },
    {
      src: 'assets/5.jpg',
      alt: 'Botafogo',
    },
    {
      src: 'assets/6.jpeg',
      alt: 'Brahma',
    },
  ];

  constructor(config: NgbCarouselConfig) {
    config.interval = 3000;
    config.animation = true;
  }

  ngOnInit(): void {}
}
