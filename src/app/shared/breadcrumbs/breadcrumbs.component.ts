import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription, filter, map } from 'rxjs';


@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  public titulo?: string;
  public tituloSubs$?: Subscription;

  constructor(private router: Router){
    this.tituloSubs$ = this.getArgumentoRuta()
                        .subscribe(data => {
                          this.titulo = data['titulo']
                          document.title = `AdminPro - ${this.titulo!}`;
                        });
  }

  ngOnDestroy(): void {
    this.tituloSubs$?.unsubscribe();
  }

  getArgumentoRuta(){
    return this.router.events
      .pipe(
        filter( (event: any) => event instanceof ActivationEnd),
        filter( (event: ActivationEnd) => event.snapshot.firstChild === null),
        map( (event: ActivationEnd) => event.snapshot.data)
      );
  }

}
