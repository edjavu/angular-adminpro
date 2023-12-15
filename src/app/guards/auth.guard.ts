import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { tap } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);

  return inject(UsuarioService).validarToken()
                                .pipe(
                                  tap(estaAutenticado => {
                                    if(!estaAutenticado){
                                      router.navigateByUrl('/login');
                                    }
                                  })
                                )

};




