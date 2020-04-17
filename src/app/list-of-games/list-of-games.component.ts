import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-list-of-games',
  templateUrl: './list-of-games.component.html',
  styleUrls: ['./list-of-games.component.css']
})
export class ListOfGamesComponent implements OnInit {
  constructor(
    public gameService: GameService
  ) { }

  ngOnInit(): void {
  }

}
