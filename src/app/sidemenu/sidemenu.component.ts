import { Component, OnInit } from '@angular/core';
import { ResponseService } from '../shared/response.service';
import { ConversationHistory } from '../shared/response.model';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {
  
  conversationList :ConversationHistory[] = [];
  selectedConversationId = new BehaviorSubject<number>(0);

  constructor(
    private responseService: ResponseService) {}

  ngOnInit(){
    this.responseService.getConvresationHistry()
      .subscribe( (result: ConversationHistory[]) => {
        this.conversationList = result;
        console.log(this.conversationList)
      }
     );  
  }

  selectConversation(id: number){
    this.responseService.selectConversation(id);
  }  
}
