import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userScore = 0;
  compScore = 0;
  userSelected: string;
  compSelected: string;
  action: string;
  status: string;
  compWeapons = [
    'rock',
    'paper',
    'scissors'
  ];

  //executed whenever 'weapon' is clicked, method binding every weapon
  userPick(userWeapon: string): void {
    this.userSelected = userWeapon;
    console.log( this.userSelected); //debugging
    setTimeout( () => {
      const randomNum = Math.floor(Math.random() * 3);
      this.compSelected = this.compWeapons[randomNum];
      console.log(this.compSelected); //debugging
      this.checkResult();
    }, 1000);
  }

  clearField() {
    setTimeout( () => {
      this.status = '';
      this.userSelected = '';
      this.compSelected = '';
    }, 1500);
  }

  win(user, comp) {
    this.userScore ++;
    this.userSelected = user;
    this.compSelected = comp;
    this.action = 'beats';
    this.status = '. You Win!';
    this.clearField();
  }

  lose(user, comp) {
    this.userScore ++;
    this.userSelected = user;
    this.compSelected = comp;
    this.action = 'loses to';
    this.status = '. You Lose!';
    this.clearField();
  }

  draw(user, comp) {
    this.userSelected = user;
    this.compSelected = comp;
    this.action = 'and';
    this.status = '. You draw!';
    this.clearField();
  }

  //randomly select weapon for comp and check winner/loser w/ checkResult method
  checkResult() {
    const userChoice = this.userSelected;
    const compChoice = this.compSelected;
    switch (userChoice + compChoice) {
      case 'rockscissors': case 'paperrock': case 'scissorspaper' :
        this.win(userChoice, compChoice);
        break;
      case 'rockpaper': case 'scissorsrock': case 'paperscissors' :
        this.lose(userChoice, compChoice);
        break;
      default: this.draw(userChoice, compChoice);
        break;
    }

  } //checkResult stores selected weapon by user and comp, joins the strings, tests and compares value of strings with the cases in switch
  //3 methods called on case matched
  //clearfield sets to default values
}
