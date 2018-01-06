import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Http} from '@angular/http';
import { MessageserviceService } from './messageservice.service';
import { Message } from './message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @ViewChild('fileInput') fileInput: ElementRef;
  private message:Message;
  files: FileList;
  public l1: String;
  public al: String = 'right';
  public file_srcs: string[] = [];
  public debug_size_before: string[] = [];
  public debug_size_after: string[] = [];

   //Component properties
 allMessages: Message[];
 statusCode: number;
 requestProcessing = false;
 messageIdToUpdate = null;
 processValidation = false;
 //Create form
 messageForm = new FormGroup({
  source_msg: new FormControl('', Validators.required),
  destinataire_msg: new FormControl('', Validators.required),
  contenu_msg: new FormControl('', Validators.required),
      
 });
 //Create constructor to get service instance
 constructor(private messageService: MessageserviceService, private http: Http) {
}
//Create ngOnInit() and and load candidats
ngOnInit(): void {
  this.getAllMessages();
}   
//Fetch all candidats
getAllMessages() {
   this.messageService.getAllMessages()
     .subscribe(
           data => this.allMessages = data,
           errorCode =>  this.statusCode = errorCode);   
}
//Handle create and update message
onMessageFormSubmit() {
 this.processValidation = true;   
 if (this.messageForm.invalid) {
      return; //Validation failed, exit from method.
 } 
 //Form is valid, now perform create or update
 this.preProcessConfigurations();
 let source_msg = this.messageForm.get('source_msg').value.trim();
let destinataire_msg = this.messageForm.get('destinataire_msg').value.trim();	 
let contenu_msg = this.messageForm.get('contenu_msg').value.trim();
  
}
//Inscription message
CreateMessage()
{
 this.preProcessConfigurations();
   let source_msg = this.messageForm.get('source_msg').value.trim();
let destinataire_msg = this.messageForm.get('destinataire_msg').value.trim();	 
let contenu_msg = this.messageForm.get('contenu_msg').value.trim();


           let message= new Message (null, source_msg, destinataire_msg, contenu_msg );	  	  
  this.messageService.createMessage(message)
    .subscribe(successCode => {
              this.statusCode = successCode;
              this.getAllMessages();	
              this.backToCreateMessage();
          },
          errorCode => this.statusCode = errorCode);
}
//Load message by id to edit
loadMessageToEdit(messageId: string) {
this.preProcessConfigurations();
this.messageService.getMessageById(messageId)
    .subscribe(message => {
              this.messageIdToUpdate = message.messageId;   
              this.messageForm.setValue({ source_msg: message.source_msg, destinataire_msg: message.destinataire_msg, contenu_msg: message.contenu_msg });
              this.processValidation = true;
              this.requestProcessing = false;   
          },
          errorCode =>  this.statusCode = errorCode);   
}
//Delete candidat
deleteMessage(messageId: string) {
  this.preProcessConfigurations();
  this.messageService.deleteMessageById(messageId)
      .subscribe(successCode => {
                this.statusCode = successCode;
                this.getAllMessages();	
            },
            errorCode => this.statusCode = errorCode);    
  }


//Perform preliminary processing configurations
preProcessConfigurations() {
this.statusCode = null;
this.requestProcessing = true;   
}
//Go back from update to create
backToCreateMessage() {
this.messageIdToUpdate = null;
this.messageForm.reset();	  
this.processValidation = false;
}  

}
