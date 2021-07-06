import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  length=0;
  password="";
  isUseLetters=false;
  isUseNumbers=false;
  isUseSymbols=false;

  onChangeLength(event: Event){
    console.log("EVENT =>",event)
    
    if(event){
      const targetElement: HTMLInputElement = <HTMLInputElement> event.target;

      const value: number = parseInt(targetElement.value);
      if (!isNaN(value))
      this.length=value;
    }
    
  }
  onChangeUseLetters(){
    this.isUseLetters = !this.isUseLetters;
  }
  onChangeUseNumbers(){
    this.isUseNumbers = !this.isUseNumbers;
  }
  onChangeUseSymbols(){
    this.isUseSymbols = !this.isUseSymbols;
  }

  onButtonClick(){
    const numbers ='1234567890';
    const letters = 'abcdefghijklmopqrstuvwxyz';
    const symbols= '!@#$%^&*()';

    let validChars="";

    if(this.isUseLetters){
        validChars += letters;
    }
    if(this.isUseNumbers){
      validChars +=numbers ;
    }
    if(this.isUseSymbols){
      validChars += symbols;
    }

    let generatedPassword = "";

    for (let i=0; i<=this.length;i++)
    {
      let index= Math.floor(Math.random()* validChars.length);
      generatedPassword += validChars[index];
    }
    this.password=generatedPassword;
  }
}
