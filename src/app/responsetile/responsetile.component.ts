import { Component } from '@angular/core';
import { ResponseService } from '../shared/response.service';
import { ApiResponse } from '../shared/response.model';
import { ConversationLog } from '../shared/response.model';

@Component({
  selector: 'app-responsetile',
  templateUrl: './responsetile.component.html',
  styleUrls: ['./responsetile.component.css']
})
export class ResponsetileComponent {

  result: ApiResponse[] = []

  constructor(
    private responseService: ResponseService,
  ){} // 依存性注入
  
  ngOnInit(): void {
    this.getResponse();

    this.responseService.selectedConversationId.subscribe( id => {
      this.responseService.getConvresationLog(id).subscribe( res => {
        // this.result = result;
        
        res.forEach( (item:ApiResponse, index:number) => {
          this.result.push({
            created_at: new Date(item.created_at),
            prompt: item.prompt,
            response: item.response,
            imgsrc: item.imgsrc ? item.imgsrc.toString().split(',') : null
          })
        })
        console.log(this.result)

      })
    })
  }

  getResponse() {
    return this.responseService.getResponse()
      .subscribe( result => this.result = result);
  }

}
