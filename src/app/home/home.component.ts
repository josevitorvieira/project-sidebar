import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { DynamicFormConfig } from '../shared/components/dynamic-form/models/dynamic-form-config.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public config: DynamicFormConfig[] =  [
    {
      type: { field: 'input' },
      label: 'Seu nome',
      name: 'name',
      initialValue: 'Vitor',
      placeholder: 'Digite seu nome, treinador Pokémon!',      
    },
    {
      type: { field: 'input', typeField: 'number' },
      label: 'Sua idade',
      name: 'age',
      initialValue: 33,
      placeholder: '18',
    },
    {
      type: { field: 'input' },
      label: 'Sua cidade',
      name: 'city',
      initialValue: 'Arapiraca',
      placeholder: 'Pallet',      
    },
    {
      type: { field: 'select' },
      label: 'Escolha seu Pokémon inicial',
      name: 'initialPokemon',
      initialValue: '1',      
      options: [{ label: 'Bulbasaur', value: '1' }, { label: 'Charmander', value: '2' }, { label: 'Squirtle', value: '3' }],      
    },
  ];
 }
