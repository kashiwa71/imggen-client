import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ResponseService } from '../response.service';


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
  
    
  getPost(){
    this.http.get<{message:string}>('http://localhost:3000/')
    .subscribe(posts => {
      console.log(posts.message);
      this.enterdPrompt = posts.message;
    });
  }

  onAddPost(){
    const encodeUrlString = encodeURIComponent(this.enterdPrompt)
    const url = "http://localhost:3000/imgen/" + encodeUrlString
    console.log(url)
    this.http.post(url, {})
    .subscribe(response => {
      console.log(response);
    })
  }
  
  callGPT(){
    this.responseService.callGPT(this.enterdPrompt);
  }

}
