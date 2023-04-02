import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projects } from '../model/projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {

  //URL = environment.URL + 'projects/';
  
  URL = 'https://portfolio-bkd-nicolas-butterfield.onrender.com/projects';

  //URL = 'http://localhost:8080/projects/';

  constructor(private httpClient: HttpClient) { }

  public lista():Observable<Projects[]>{
    return this.httpClient.get<Projects[]>(this.URL + '/lista');
  }

  public detail(id: number): Observable<Projects>{
    return this.httpClient.get<Projects>(this.URL + `/detail/${id}`);
  }

  public save(project: Projects): Observable<any>{
    return this.httpClient.post<any>(this.URL + '/create', project);
  }

  public update (id: number, project: Projects): Observable<any>{
    return this.httpClient.put<any>(this.URL + `/update/${id}`, project);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `/delete/${id}`);
  }

}
