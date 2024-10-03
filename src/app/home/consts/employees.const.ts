import { Validators } from '@angular/forms';
import { DynamicFormConfig } from '../../shared/components/dynamic-form/models/dynamic-form-config.model';
import { IEmployee } from '../interfaces/employee.interface';

// export const employees: Array<DynamicFormConfig> = [
//   {
//     type: { field: 'input' },
//     label: 'Nome',
//     name: 'name',
//     initialValue: 'Vitor',
//     placeholder: 'Digite seu nome, treinador Pokémon!',
//   },
//   {
//     type: { field: 'input', typeField: 'number' },
//     label: 'Sua idade',
//     name: 'age',
//     initialValue: 33,
//     placeholder: '18',
//   },
//   {
//     type: { field: 'input' },
//     label: 'Sua cidade',
//     name: 'city',
//     initialValue: 'Arapiraca',
//     placeholder: 'Pallet',
//   },
//   {
//     type: { field: 'select' },
//     label: 'Escolha seu Pokémon inicial',
//     name: 'initialPokemon',
//     initialValue: '1',
//     options: [
//       { label: 'Bulbasaur', value: '1' },
//       { label: 'Charmander', value: '2' },
//       { label: 'Squirtle', value: '3' },
//     ],
//   },
// ];

export interface IBaseFormEmployeeConfig {
  [key: string]: DynamicFormConfig;
  Name: DynamicFormConfig;
  Age: DynamicFormConfig;
  Position: DynamicFormConfig;
}

export const baseFormConfig: Array<DynamicFormConfig> = [
  {
    type: { field: 'input', typeField: 'number' },
    label: 'Id',
    name: 'Id',
    initialValue: '',
    placeholder: 'Insira seu nome.',
    disabled: true,
    validation: [Validators.required],
  } as DynamicFormConfig,
  {
    type: { field: 'input' },
    label: 'Nome',
    name: 'Name',
    initialValue: '',
    placeholder: 'Insira seu nome.',
    validation: [Validators.required],
  } as DynamicFormConfig,
  {
    type: { field: 'input', typeField: 'number' },
    label: 'Idade',
    name: 'Age',
    initialValue: '',
    placeholder: 'Insira sua idade.',
    validation: [Validators.required],
  } as DynamicFormConfig,
  {
    type: { field: 'input' },
    label: 'Cargo',
    name: 'Position',
    initialValue: '',
    placeholder: 'Insira seu cargo',
    validation: [Validators.required],
  } as DynamicFormConfig,
];

export const employees: Array<IEmployee> = [
  {
    Id: 1,
    Age: 31,
    Name: 'João',
    Position: 'Gerente',
    // Addres: {
    //   Street: 'Rua 1',
    //   zip: '11111-111',
    //   city: 'Cidade 1',
    //   state: 'Estado 1',
    //   country: 'Pais 1',
    // },
  },
  {
    Id: 2,
    Age: 23,
    Name: 'Maria',
    Position: 'Assistente Administrativo',
    // Addres: {
    //   Street: 'Rua 2',
    //   zip: '22222-222',
    //   city: 'Cidade 2',
    //   state: 'Estado 2',
    //   country: 'Pais 2',
    // },
  },
  {
    Id: 3,
    Age: 45,
    Name: 'Gabriel',
    Position: 'Padeiro',
    // Addres: {
    //   Street: 'Rua 3',
    //   zip: '33333-333',
    //   city: 'Cidade 3',
    //   state: 'Estado 3',
    //   country: 'Pais 3',
    // },
  },
  {
    Id: 4,
    Age: 18,
    Name: 'José',
    Position: 'Entregador',
    // Addres: {
    //   Street: 'Rua 4',
    //   zip: '44444-444',
    //   city: 'Cidade 4',
    //   state: 'Estado 4',
    //   country: 'Pais 4',
    // },
  },
];
