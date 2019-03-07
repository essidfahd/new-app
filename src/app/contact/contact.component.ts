import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, AfterViewInit {
  nameErr: boolean;
  emailErr: boolean;
  msgErr: boolean;

  message: string = '';
  constructor() { console.log('first!'); }

  ngOnInit() {
    console.log('second!')
  }
  ngAfterViewInit() {
    console.log('third !')
  }
  sendBtn(name,email,msg) {

    if (name === '') {
      this.nameErr=true;
    }else {this.nameErr=false;}

    if (email === '') {
      this.emailErr=true;
    }else {this.emailErr=false;}

    if (msg === '') {
      this.msgErr=true;
    }else {this.msgErr=false;}

    console.log('Bottom clicked ' + name);
    {this.message = 'Merci ' + name + ' pour votre message';}
  }
}
