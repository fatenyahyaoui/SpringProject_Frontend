import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

import { Message } from './message';


@Injectable()
export class MessageserviceService {

  //URLs for CRUD operations
  allMessagesUrl = "http://localhost:8080/all-messages";
  messageUrl = "http://localhost:8080/message";
  //Create constructor to get Http instance

 constructor(private http:Http) { }

 //Fetch all messages
 getAllMessages(): Observable<Message[]> {
   return this.http.get(this.allMessagesUrl)
      .map(this.extractData)
       .catch(this.handleError);

}
//Create message
createMessage(message: Message):Observable<number> {
 let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
   let options = new RequestOptions({ headers: cpHeaders });
   return this.http.post(this.messageUrl,message, options)
          .map(success => success.status)
          .catch(this.handleError);
}
//Fetch message by id
getMessageById(messageId: string): Observable<Message> {
let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
let cpParams = new URLSearchParams();
cpParams.set('id', messageId);			
let options = new RequestOptions({ headers: cpHeaders, params: cpParams });
return this.http.get(this.messageUrl, options)
    .map(this.extractData)
    .catch(this.handleError);
}	

//Delete message	
deleteMessageById(messageId: string): Observable<number> {
let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
let cpParams = new URLSearchParams();
cpParams.set('id', messageId);			
let options = new RequestOptions({ headers: cpHeaders, params: cpParams });
return this.http.delete(this.messageUrl, options)
    .map(success => success.status)
    .catch(this.handleError);
}		
private extractData(res: Response) {
 let body = res.json();
   return body;
}
private handleError (error: Response | any) {
console.error(error);
return Observable.throw(error.status);
}

}
