import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.css']
})
export class PromptComponent {
  prompt = '';
  enterdPrompt = '';


  constructor( private http: HttpClient) { }
  
  getPost(){
    this.http.get<{message:string}>('http://localhost:3000/')
    .subscribe(posts => {
      console.log(posts.message);
      this.enterdPrompt = posts.message;
    });
  }


}
