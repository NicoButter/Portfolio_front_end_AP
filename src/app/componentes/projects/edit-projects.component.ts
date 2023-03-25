import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Projects } from 'src/app/model/projects';
import { ImageService } from 'src/app/service/image.service';
import { ProjectServiceService } from 'src/app/service/project-service.service';

@Component({
  selector: 'app-edit-projects',
  templateUrl: './edit-projects.component.html',
  styleUrls: ['./edit-projects.component.css']
})

export class EditProjectsComponent {

  project: Projects = null;

  constructor(public imageService: ImageService, private activatedRouter: ActivatedRoute, private projectService: ProjectServiceService, private router: Router) { }

  ngOnInit() {
    const id = this.activatedRouter.snapshot.params['id'];
    this.projectService.detail(id).subscribe(
      data =>{
        this.project = data; 
      }, err =>{
        alert("Ocurrio un error al cargar el registro del proyecto, reintente.");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id']
    this.project.img = this.imageService.url;
    this.projectService.update(id, this.project).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al intentar modificar el registro del proyecto, reintente.");
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event: any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = 'perfil_' + id;
    this.imageService.uploadImage($event, name);
  }

}