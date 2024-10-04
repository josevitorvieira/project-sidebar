export interface IAddres {
  Street: string;
  Number: number;
  State: string;
  City: string;
  Country: string;
}

export interface IEmployee {
  [key: string]: any;
  Id: number;
  Age: number;
  Name: string;
  Position: string;
  Address?: IAddres;
}
