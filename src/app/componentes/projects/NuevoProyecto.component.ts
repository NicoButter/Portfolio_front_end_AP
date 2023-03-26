import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Projects } from 'src/app/model/projects';
import { ImageService } from 'src/app/service/image.service';
import { ProjectServiceService } from 'src/app/service/project-service.service';

@Component({
  selector: 'app-NuevoProyecto',
  templateUrl: './NuevoProyecto.component.html',
  styleUrls: ['./NuevoProyecto.component.css']
})

export class NuevoProyecto implements OnInit {

  nombre: string;
  descripcion: string;
  img: string;

  constructor(public imageService: ImageService, private projectS: ProjectServiceService, private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit() {}

  onCreate(): void{
    
    const proyecto = new Projects (this.nombre, this.descripcion, this.img)

    this.projectS.save(proyecto).subscribe(
      data => {
        alert("El proyecto se agregó correctamente.");
        this.router.navigate(['']);
      }, err =>{
        alert("Ocurrio una falla al intentar agregar el proyecto, reintente.");
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event: any){
    const id = this.activatedRouter.snapshot.params['id']
    const name = 'proyecto_' + id
    this.imageService.uploadImage($event, name);
  }

}
