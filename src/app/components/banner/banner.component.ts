import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  @Input() src: string;
  @Input() alt: string;
  @Input() credit?: string;

  constructor() {}

  ngOnInit(): void {}
}
