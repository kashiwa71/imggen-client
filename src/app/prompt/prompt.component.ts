import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ResponseService } from '../shared/response.service';


@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.css']
})
export class PromptComponent {
  prompt = '';
  enterdPrompt = '';
  response = '';

  isLoading$ = this.responseService.isLoading.asObservable();

  constructor(
    private http: HttpClient,
    private responseService: ResponseService) { }
   
 

  callImggen(){
    const encodeUrlString = encodeURIComponent(this.enterdPrompt)
    this.responseService.requestImggen(encodeUrlString);
  }
  
  callGPT(){
    this.responseService.requestGPT(this.enterdPrompt);
  }

}
