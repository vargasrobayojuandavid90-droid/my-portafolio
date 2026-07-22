import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PopUpProyectos } from "../../components/pop-up-proyectos/pop-up-proyectos";


@Component({
  selector: 'app-proyect',
  imports: [PopUpProyectos],
  templateUrl: './proyect.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Proyects {
  showPopup = false;
  openPopup (){
   this.showPopup = true; 
  }
  closePopup(){
    this.showPopup = false
  }
}
