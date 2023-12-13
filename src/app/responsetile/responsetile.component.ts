import { Component } from '@angular/core';
import { ResponseService } from '../response.service';
import { ApiResponse } from '../response.model';
import { ConversationLog } from '../response.model';

@Component({
  selector: 'app-responsetile',
  templateUrl: './responsetile.component.html',
  styleUrls: ['./responsetile.component.css']
})
export class ResponsetileComponent {

  result: ApiResponse[] = []
  conversation: ConversationLog[] = [];

  constructor(
    private responseService: ResponseService,
  ){} // 依存性注入
  
  ngOnInit(): void {
    this.getResponse();

    this.responseService.selectedConversationId.subscribe( id => {
      this.responseService.getConvresationLog(id).subscribe( coversation => {
        this.conversation = coversation;
        console.log(this.conversation)
      })
    })
  }

  getResponse() {
    return this.responseService.getResponse()
      .subscribe( result => this.result = result);
  }

}
