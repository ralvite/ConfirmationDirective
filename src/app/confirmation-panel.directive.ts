/*
Configuramos la directiva para que se quede
escuchando el evento clic del boton
para ello importamos el HostListener
*/
import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appConfirmationPanel]'
})
export class ConfirmationPanelDirective {

  @HostListener('click', ['$event'])
  onClick(){
    return window.confirm('Desea guardar...?');
  }

}
