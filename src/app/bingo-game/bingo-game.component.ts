import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GameService} from '../game.service';

@Component({
  selector: 'app-bingo-game',
  templateUrl: './bingo-game.component.html',
  styleUrls: ['./bingo-game.component.css']
})
export class BingoGameComponent implements OnInit {
  game;

  constructor(
    private route: ActivatedRoute,
    private games: GameService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.game = this.games[+params.get('productId')];
    });
  }
}
