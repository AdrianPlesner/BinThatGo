import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  games = [];
  constructor() { }
  addGame(game){
    this.games.push(game);
  }
}
