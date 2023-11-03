import { Component } from '@angular/core';
import { ResponseService } from '../response.service';
import { ApiResponse } from '../response.model';

@Component({
  selector: 'app-responsetile',
  templateUrl: './responsetile.component.html',
  styleUrls: ['./responsetile.component.css']
})
export class ResponsetileComponent {

  result: ApiResponse[] = []
  
  constructor(private responseService: ResponseService) { } // 依存性注入
  
  ngOnInit(): void {
    this.getResponse();
  }

  getResponse() {
    return this.responseService.getResponse()
      .subscribe( result => this.result = result);
  }

}
