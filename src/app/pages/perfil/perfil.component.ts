
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario.model';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styles: [
  ]
})

export class PerfilComponent implements OnInit{

  public formSubmitted = false;
  public perfilForm: FormGroup;
  public usuario?: Usuario;
  public imagenSubir?: File;
  public imgTemp?: any;

  constructor(private fb: FormBuilder,
              private usuarioService: UsuarioService,
              private fileUploadService: FileUploadService){

    this.usuario = usuarioService.usuario;

    this.perfilForm = this.fb.group({
        nombre: [this.usuario?.nombre, Validators.required],
        email: [this.usuario?.email, [Validators.required, Validators.email]]
      });
    }

  ngOnInit(): void {

  }

  actualizarPerfil(){
    this.usuarioService.actualizarPerfil({
      email: this.perfilForm.value.email || undefined,
      nombre: this.perfilForm.value.nombre || undefined,
    }).subscribe( () => {
      const { nombre, email } = this.perfilForm.value;
      if (this.usuario){
        this.usuario.nombre = nombre ;
        this.usuario.email  = email;

        Swal.fire('Guardado', 'Cambios fueron guardados', 'success');
      }

    }, (err) => {
      Swal.fire('Error', err.error.msg, 'error');
    });
  }

  cambiarImagen(event: any){
    const fileList: FileList = event.target.files;
    if (fileList && fileList.length > 0) {
      const file: File = fileList[0];
      // Aquí puedes trabajar con el archivo seleccionado
      this.imagenSubir = file;

      if ( !file ){
        return this.imgTemp = undefined;
      } else {

        const reader = new FileReader();
        reader.readAsDataURL(this.imagenSubir!);

        reader.onloadend = () => {
          this.imgTemp = reader.result;
        }
      }
    } else {
      return this.imgTemp = undefined;
    }

  }

  subirImagen(){

    this.fileUploadService.actualizarFoto(this.imagenSubir!, 'usuarios', this.usuario?.uid!)
    .then(img => {
      if(this.usuario?.img){
        this.usuario.img = img;
        Swal.fire('Guardado', 'Imagen de usuario actualizada', 'success');
      }
    }).catch(err => {
      Swal.fire('Error', 'No se pudo subir la imagen', 'error');
    })

  }
}

