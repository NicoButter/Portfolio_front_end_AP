import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NuevoUsuario } from '../model/nuevo-usuario';
import { JwtDto } from '../model/jwt-dto';
import { Observable } from 'rxjs';
import { LoginUsuario } from '../model/login-usuario';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  authURL = environment.URL + 'auth/';
  
  //authURL = 'https://portfolio-bkd-nicolas-butterfield.onrender.com/auth';

  //authURL = 'http://localhost:8080/auth/';
  
  constructor(private httpClient: HttpClient) { }

  public nuevo(nuevoUsuario : NuevoUsuario): Observable<any>{
    return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUsuario );
  }
  
}
