import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/_model/Pokemon';
import { getPokemonImage } from '../../_model/Pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass']
})
export class PokemonCardComponent {
 @Input()
  public pokemon!: Pokemon; 

  public getPokemonImage = getPokemonImage;

  public leadingZero(str: string | number, size: number = 3){
    let s = String(str);

    while (s.length < (size || 2)) {
      s = '0' + s;
    }
    return s;
  }
}
