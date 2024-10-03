export interface IAddres {
  Street: string;
  zip: string;
  city: string;
  state: string;
  country: string;
}

export interface IEmployee {
  [key: string]: any;
  Id: number;
  Age: number;
  Name: string;
  Position: string;
  Addres?: IAddres;
}
