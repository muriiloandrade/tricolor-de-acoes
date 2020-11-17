import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-link',
  templateUrl: './banner-link.component.html',
  styleUrls: ['./banner-link.component.css'],
})
export class BannerLinkComponent implements OnInit {
  @Input() link: string;
  @Input() src: string;
  @Input() alt: string;
  @Input() credit?: string;

  constructor() {}

  ngOnInit(): void {}
}
