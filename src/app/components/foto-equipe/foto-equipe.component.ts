import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-foto-equipe',
  templateUrl: './foto-equipe.component.html',
  styleUrls: ['./foto-equipe.component.css'],
})
export class FotoEquipeComponent implements OnInit {
  @Input() src: string;
  @Input() nome: string;
  @Input() descricao: string;

  constructor() {}

  ngOnInit(): void {}
}
