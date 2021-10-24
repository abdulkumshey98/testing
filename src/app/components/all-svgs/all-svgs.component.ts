import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-svgs',
  templateUrl: './all-svgs.component.html',
  styleUrls: ['./all-svgs.component.scss']
})
export class AllSvgsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  svgId!: string;

}
