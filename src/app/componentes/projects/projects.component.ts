import { Component } from '@angular/core';
import { Projects } from 'src/app/model/projects';
import { ProjectServiceService } from 'src/app/service/project-service.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent {
  
  projects: Projects[] = [];

  constructor(private projectsService: ProjectServiceService, private tokenService: TokenService){}

  isLogged =false;

  ngOnInit(): void{
    
    this.cargarProject();

    if(this.tokenService.getToken()){
      this.isLogged = true
    } else{
      this.isLogged = false
    }
  }

  cargarProject(): void{
    this.projectsService.lista().subscribe(
      data =>{
        this.projects = data
      } 
    )
  }

  borrar(id: number){
    if(id != undefined){
      this.projectsService.delete(id).subscribe(
        data => {
          this.cargarProject();
        }, err => {
          alert("Error al intentar eliminar el registro.")
        }
      )
    }
  }

}