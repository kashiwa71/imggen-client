import { Component } from '@angular/core';

@Component({
  selector: 'app-responsetile',
  templateUrl: './responsetile.component.html',
  styleUrls: ['./responsetile.component.css']
})
export class ResponsetileComponent {

  result = [
    { title: 'Title 1', description: 'Description 1' },
    { title: 'Title 2', description: 'Description 2' },
    { title: 'Title 3', description: 'Description 3' },
  ]

}
