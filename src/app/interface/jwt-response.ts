import {Usuario} from "./usuario";

export interface JwtResponse {
  jwtToken: string;
  expireToken: number;
  user: Usuario;
}
