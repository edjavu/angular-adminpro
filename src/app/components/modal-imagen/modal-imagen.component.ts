import { Component } from '@angular/core';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { ModalImagenService } from 'src/app/services/modal-imagen.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-imagen',
  templateUrl: './modal-imagen.component.html',
  styles: [
  ]
})
export class ModalImagenComponent {

  public imagenSubir?: File;
  public imgTemp?: any;

  constructor( public modalImagenService: ModalImagenService,
               public fileUploadService: FileUploadService ){}

  cerrarModal(){
    this.imgTemp = null;
    this.modalImagenService.cerrarModal();
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

    const id = this.modalImagenService.id;
    const tipo = this.modalImagenService.tipo;

    this.fileUploadService.actualizarFoto(this.imagenSubir!, tipo, id)
    .then(img => {
      Swal.fire('Guardado', 'Imagen de usuario actualizada', 'success');

      this.modalImagenService.nuevaImagen.emit(img);

      this.cerrarModal();
    }).catch(err => {
      Swal.fire('Error', 'No se pudo subir la imagen', 'error');
    })
  }

}
