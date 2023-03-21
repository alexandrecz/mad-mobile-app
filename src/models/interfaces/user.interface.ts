import { Key } from "react";

export interface Name {
  first: string;
  last: string;
}

export interface Location {
  city: string;
  state: string;
}

export interface Picture {
  thumbnail: string;
  medium: string;
  large: string;
}

export interface User {
  name: Name;
  location: Location;
  picture: Picture;
  phone: string;
  email: string;
}
