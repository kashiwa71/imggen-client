import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import OpenAI from 'openai';

@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.css']
})
export class PromptComponent {
  prompt = '';
  enterdPrompt = '';
  response = '';

  constructor( private http: HttpClient) { }
  
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
    // post submitted prompt to server and get response
    this.http.post<{role:string, content:string}>('http://localhost:3000/gpt', {prompt: this.enterdPrompt})
    .subscribe(response => {
      console.log(response);
      this.response = response.content;
    })
  }
}
