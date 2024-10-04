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
  {
    type: { field: 'input' },
    label: 'Endereço',
    name: 'Address',
    initialValue: '',
    placeholder: 'Insira seu cargo',
    validation: [Validators.required],
    subParams: [
      {
        type: { field: 'input' },
        label: 'Rua',
        name: 'Street',
        initialValue: '',
        placeholder: 'Insira sua rua',
        validation: [Validators.required],
      } as DynamicFormConfig,
      {
        type: { field: 'input', typeField: 'number' },
        label: 'Número',
        name: 'Number',
        initialValue: '',
        placeholder: 'Insira sua rua',
        validation: [Validators.required],
      } as DynamicFormConfig,
      {
        type: { field: 'input' },
        label: 'Cidade',
        name: 'City',
        initialValue: '',
        placeholder: 'Insira sua cidade',
        validation: [Validators.required],
      } as DynamicFormConfig,
      {
        type: { field: 'input' },
        label: 'Estado',
        name: 'State',
        initialValue: '',
        placeholder: 'Insira seu estado',
        validation: [Validators.required],
      } as DynamicFormConfig,
      {
        type: { field: 'input' },
        label: 'Pais',
        name: 'Country',
        initialValue: '',
        placeholder: 'Insira seu pais',
        validation: [Validators.required],
      } as DynamicFormConfig,
    ],
  } as DynamicFormConfig,
];

export const employees: Array<IEmployee> = [
  {
    Id: 1,
    Age: 31,
    Name: 'João',
    Position: 'Gerente',
    Address: {
      Street: 'Rua 1',
      Number: 1,
      State: 'Estado 1',
      City: 'Cidade 1',
      Country: 'Pais 1',
    },
  },
  {
    Id: 2,
    Age: 23,
    Name: 'Maria',
    Position: 'Assistente Administrativo',
    Address: {
      Street: 'Rua 2',
      Number: 2,
      State: 'Estado 2',
      City: 'Cidade 2',
      Country: 'Pais 2',
    },
  },
  {
    Id: 3,
    Age: 45,
    Name: 'Gabriel',
    Position: 'Padeiro',
    Address: {
      Street: 'Rua 3',
      Number: 3,
      State: 'Estado 3',
      City: 'Cidade 3',
      Country: 'Pais 3',
    },
  },
  {
    Id: 4,
    Age: 18,
    Name: 'José',
    Position: 'Entregador',
    Address: {
      Street: 'Rua 4',
      Number: 3,
      State: 'Estado 4',
      City: 'Cidade 4',
      Country: 'Pais 4',
    },
  },
];
