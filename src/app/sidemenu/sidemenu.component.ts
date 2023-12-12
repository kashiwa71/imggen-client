import { Component, OnInit } from '@angular/core';
import { ResponseService } from '../response.service';
import { ConversationHistory } from '../response.model';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {
  
  conversationList :ConversationHistory[] = [];

  constructor(private responseService: ResponseService,private http: HttpClient) {


    
  }

  ngOnInit(){
    this.responseService.getConvresationHistry()
      .subscribe( (result: ConversationHistory[]) => {
        this.conversationList = result;
        console.log(this.conversationList)
      }
     );  
  }


  
}
