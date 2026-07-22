import { ChangeDetectionStrategy, Component, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: 'app-pop-up-proyectos',
  imports: [],
  templateUrl: './pop-up-proyectos.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopUpProyectos {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();

  closePopup(){
    this.close.emit();
  }

}
