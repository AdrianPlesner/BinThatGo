import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { GameService } from '../game.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css']
})
export class CreateGameComponent implements OnInit {
  newGameForm;
  constructor(
    private formBuilder: FormBuilder,
    private gameService: GameService,
    private router: Router
  ) {
    this.newGameForm = this.formBuilder.group({
      maxPlayers: 0,
      maxBingos: 0,
      maxBoards: 0,
      name: '',
      isPrivate: false,
      password: ''
    });
  }

  ngOnInit(): void {
  }

  onSubmit(gameData){
    this.gameService.addGame(gameData);
    this.newGameForm.reset();
    this.router.navigate(['/bingo/' + this.gameService.games.length]);
  }

}
