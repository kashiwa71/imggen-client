import { Injectable } from '@angular/core';
import { ApiResponse, ConversationHistory } from './response.model';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  constructor( private http: HttpClient) { }

  result: ApiResponse[] = [
    // { date: new Date(), prompt: 'prompt1', response: 'response', imgsrc: null},
    // { date: new Date(), prompt: 'prompt2', response: 'response', imgsrc: null},
    // { date: new Date(), prompt: 'prompt3', response: 'response', imgsrc: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Nyan-cat.gif"},
  ]
  
  conversationList: ConversationHistory[] = [];

  isLoading = new BehaviorSubject<boolean>(false);

  /**
   * Calls the GPT API with the entered prompt and updates the result array with the response.
   * @param enterdPrompt - The prompt entered by the user.
   * @returns void
   */
  requestGPT(enterdPrompt: string){
    this.isLoading.next(true);
    // post submitted prompt to server and get response
    this.http.post<{role:string, content:string}>('http://localhost:3000/gpt', {prompt: enterdPrompt})
      .subscribe(response => {
        this.isLoading.next(false);
        console.log(response);
        
        //ロールは捨てる
        this.result.push({
          date: new Date(),
          prompt: enterdPrompt,
          response: response.content,
          imgsrc: null
        });

      })
  }

  requestImggen(enterdPrompt: string){
    this.isLoading.next(true);
    // post submitted prompt to server and get response
    this.http.post<any>('http://localhost:3000/imgen/links-only/' + enterdPrompt, {})
      .subscribe(response => {
        this.isLoading.next(false);
        console.log(response);
        
        this.result.push({
          date: new Date(),
          prompt: enterdPrompt,
          response: null,
          imgsrc: response
        });

      })
  }

  getResponse(): Observable<ApiResponse[]> {
    const reslts = of(this.result); // of() returns an Observable<ApiResponse[]>
    return reslts;
  }

  getConvresationHistry(): Observable<any> {
    return this.http.get<{id:number, started_at:string}[]>('http://localhost:3000/coversation_history')
  }
}
