import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListOfGamesComponent } from './list-of-games/list-of-games.component';
import {RouterModule} from '@angular/router';
import { CreateGameComponent } from './create-game/create-game.component';
import { BingoGameComponent } from './bingo-game/bingo-game.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: ListOfGamesComponent},
      {path: 'create', component: CreateGameComponent},
      {path: 'bingo/:gameId', component: BingoGameComponent}
    ])
  ],
  declarations: [
    AppComponent,
    ListOfGamesComponent,
    CreateGameComponent,
    BingoGameComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
